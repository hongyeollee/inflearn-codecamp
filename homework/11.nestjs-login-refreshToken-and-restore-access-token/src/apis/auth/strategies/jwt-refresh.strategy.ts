import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        console.log(`refreshStrategy req: `, req);
        const cookie = req.headers.cookie;
        const refreshToken = cookie.replace('lovely soong=', '');
        return refreshToken;
      },
      secretOrKey: process.env.JWT_REFRESH_SECRET_KEY,
    });
  }

  validate(payload) {
    console.log(`validate payload: `, payload);
    return {
      id: payload.sub,
    };
  }
}
