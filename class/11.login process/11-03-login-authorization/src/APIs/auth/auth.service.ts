import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService, //
  ) {}
  async login({ email, password }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일 일치하는 유저 DB에서 찾기
    const user = await this.usersService.findOneByEmail({ email });

    // 2. 이메일이 일치하지 않으면 에러 던지기
    if (!user)
      throw new UnprocessableEntityException('존재하지 않는 이메일 입니다.');

    // 3. 유저가 확인되면 DB의 비밀번호를 비교하기
    const isAuth = await bcrypt.compare(password, user.password);

    // 4. 비밀번호 비교시에 잘못된 비밀번호를 작성하게되면 에러 던지기
    if (!isAuth) throw new UnprocessableEntityException('틀린 암호입니다.');

    // 5. 유저와 비밀번호의 매칭이 모두 성공했을때
    //     => accessToken(=JWT 활용)을 만들어서 브라우저에 전달하기

    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id },
      { secret: '나의비밀번호', expiresIn: '1h' },
    );
  }
}