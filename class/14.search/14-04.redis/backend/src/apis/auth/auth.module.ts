import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports:
    //[TypeOrmModule.forFeature([User])],
    //[UsersModule],=>typeorm을 불러오지않고 usersModule안에
    //export하려는 것을 담아 module로 보내면 typeorm을 쓰지 않아도 된다.
    [
      JwtModule.register({}), //
      UsersModule,
    ],
  providers: [
    AuthResolver, //
    AuthService,
    JwtAccessStrategy,
    JwtRefreshStrategy,
    //UsersService, ->typeorm을 import해올때 같이 사용해주어야 함.
  ],
})
export class AuthModule {}
