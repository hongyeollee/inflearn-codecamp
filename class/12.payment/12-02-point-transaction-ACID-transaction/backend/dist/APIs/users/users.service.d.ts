import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUsersServiceCreate, IUsersServiceFindOneByEmail } from './interfaces/users-service.interface';
export declare class UsersService {
    private readonly UsersRepository;
    constructor(UsersRepository: Repository<User>);
    findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User>;
    create({ email, password, name, age, }: IUsersServiceCreate): Promise<User>;
}
