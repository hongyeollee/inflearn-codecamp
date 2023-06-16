import { UsersService } from '../users/users.service';
import { IAuthServiceGetAccessToken, IAuthServiceLogin, IAuthServiceRestoreAccessToken, IAuthServiceSetRefreshToken } from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    login({ email, password, context, }: IAuthServiceLogin): Promise<string>;
    getAccessToken({ user }: IAuthServiceGetAccessToken): string;
    setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void;
    restoreAccessToken({ user }: IAuthServiceRestoreAccessToken): string;
}
