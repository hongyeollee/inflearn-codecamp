import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import {
  IUserServiceDelete,
  IUserServiceFindOne,
  IUserServiceUpdateUserPwd,
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

  async deleteLoginUser({ email }: IUserServiceDelete): Promise<boolean> {
    const user = await this.findOneByEmail({ email });
    if (!user) throw new BadRequestException('등록되지 않은 이메일 입니다.');

    const result = await this.UsersRepository.delete({ email });
    return result.affected ? true : false;
  }

  findOne({ email }: IUserServiceFindOne): Promise<User> {
    return this.UsersRepository.findOne({
      where: { email },
    });
  }

  async updateUserPwd({
    email,
    password,
  }: IUserServiceUpdateUserPwd): Promise<UpdateResult> {
    const user = await this.findOneByEmail({ email });
    if (!user)
      throw new UnprocessableEntityException('등록되지 않은 이메일 입니다.');

    // resolver에서 useGuard를 사용하여 accessToken을 발행하기 때문에 해당된 유저만 접근가능하여 bcrypt.compare는 필요하지 않음.
    // const isAuth = await bcrypt.compare(password, user.password);
    // if (!isAuth) throw new UnprocessableEntityException('틀린 암호입니다.');

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT),
    );
    return await this.UsersRepository.update(
      { email: user.email },
      { password: hashedPassword },
    );
  }
}
