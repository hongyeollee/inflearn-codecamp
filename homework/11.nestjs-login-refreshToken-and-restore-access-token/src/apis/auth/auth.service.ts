import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
} from './interfaces/auth-service.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, //
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password, context }: IAuthServiceLogin) {
    // 1. 이메일이 일치하는 유저를 DB에서 찾기
    const user = await this.userService.findOneByEmail({ email });
    // 2. 일치하는 유저가 없으면?! 에러 던지기!!!
    if (!user)
      throw new UnprocessableEntityException('존재하지 않는 이메일입니다.');
    // 3. 일치하는 유저가 있지만, 비밀번호가 틀렸다면?!
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('틀린 암호입니다.');
    // 4. refreshToken(=JWT)을 만들어서 브라우저 쿠키에 저장해서 보내주기
    this.setRefreshToken({ user, context });

    // 5. 일치하는 유저도 있고, 비밀번호도 맞았다면?!
    //    => accessToken(=JWT)을 만들어서 브라우저에 전달하기
    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id },
      {
        secret: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE,
      },
    );
  }

  setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void {
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      {
        secret: process.env.JWT_REFRESH_SECRET_KEY,
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE,
      },
    );

    //개발환경
    context.res.setHeader(
      'set-Cookie',
      `lovely soong=${refreshToken}; path=/;`,
    );

    // 배포환경
    // context.res.setHeader('set-Cookie', `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly`);
    // context.res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com');
  }

  restoreAccessToken({ user }: IAuthServiceRestoreAccessToken): string {
    return this.getAccessToken({ user });
  }
}
