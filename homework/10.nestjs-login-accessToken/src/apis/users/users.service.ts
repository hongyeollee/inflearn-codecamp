import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import {
  IUserServiceDelete,
  IUserServiceFindOne,
  IUserServiceUpdate,
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>,
  ) {}

  findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.UsersRepository.findOne({ where: { email } });
  }

  async create({
    password,
    email,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT),
    );

    return this.UsersRepository.save({
      password: hashedPassword,
      email,
      name,
      age,
    });
  }

  async delete({ email }: IUserServiceDelete): Promise<boolean> {
    const user = await this.findOneByEmail({ email });
    if (!user) throw new BadRequestException('등록되지 않은 이메일 입니다.');

    const result = await this.UsersRepository.delete({ email });
    return result.affected ? true : false;
  }

  async update({
    name,
    age,
    email,
    password,
  }: IUserServiceUpdate): Promise<UpdateResult> {
    const user = await this.findOneByEmail({ email });
    if (!user) throw new BadRequestException('등록되지 않은 이메일 입니다.');

    const result: UpdateResult = await this.UsersRepository.update(
      { id: user.id },
      { name, age, email, password },
    );

    if (result.affected === 0)
      throw new BadRequestException('회원정보 수정 실패');
    return result;
  }

  findAll(): Promise<User[]> {
    return this.UsersRepository.find();
  }

  findOne({ email }: IUserServiceFindOne): Promise<User> {
    return this.UsersRepository.findOne({
      where: { email },
    });
  }
}
