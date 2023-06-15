import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

// Strategy예시 (카카오,네이버, 구글 등 소셜로그인에 대해 활용하고자한다면 )
// 예시패턴 : import {KakaoStrategy} from 'passport-kakao'
// 위와 같은방식으로 활용하면 작동을 활용할 수 있다.

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie; // -> refreshToken=asdjaslkf
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      },
      secretOrKey: '나의리프레시비밀번호',
    });
  }

  validate(payload) {
    console.log(payload); //{sub:user.id}

    return {
      id: payload.sub,
    };
  }
}
