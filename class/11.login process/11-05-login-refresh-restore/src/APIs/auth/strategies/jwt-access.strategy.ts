import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// Strategy예시 (카카오,네이버, 구글 등 소셜로그인에 대해 활용하고자한다면 )
// 예시패턴 : import {KakaoStrategy} from 'passport-kakao'
// 위와 같은방식으로 활용하면 작동을 활용할 수 있다.

export class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  '나만의인가',
) {
  constructor() {
    super({
      // jwtFromRequest: (req) => {
      //   const temp = req.headers.Authorization; // -> Bearer asldkfjaskjg
      //   const accessToken = temp.toLowerCase().replace('bearer ', '');
      //   return accessToken;
      // },passportf라이브러리에서 해주는 기능이 있음 그게 바로 아래 ExtractJwt
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '나의비밀번호',
    });
  }

  validate(payload) {
    console.log(payload); //{sub:user.id}

    return {
      id: payload.sub,
    };
  }
}
