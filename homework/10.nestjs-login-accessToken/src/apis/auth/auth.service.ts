import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, //
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: IAuthServiceLogin) {
    const user = await this.userService.findOneByEmail({ email });
    if (!user)
      throw new UnprocessableEntityException('존재하지 않는 이메일입니다.');

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('틀린 암호입니다.');

    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id },
      { secret: process.env.JWT_SECRET_KEY, expiresIn: process.env.JWT_EXPIRE },
    );
  }
}
