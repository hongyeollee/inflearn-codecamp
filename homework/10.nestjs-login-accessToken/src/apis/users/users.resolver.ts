import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { gqlAuthAccessToken } from '../auth/guards/gql-auth.guard';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Mutation(() => User, { nullable: true })
  createUser(
    @Args('password') password: string,
    @Args('email') email: string,
    @Args('name') name: string,
    //@Args({ name: 'age', type: () => Int }) age: number,
    @Args('age') age: number,
  ): Promise<User> {
    return this.usersService.create({ password, email, name, age });
  }

  @UseGuards(gqlAuthAccessToken)
  @Mutation(() => Boolean)
  deleteUser(
    @Args('email') email: string, //
  ): Promise<boolean> {
    console.log('user 삭제 인가에 성공했습니다.');
    return this.usersService.deleteLoginUser({ email });
  }

  @UseGuards(gqlAuthAccessToken)
  @Mutation(() => String)
  async updateUserPwd(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    await this.usersService.updateUserPwd({ email, password });
    return '비밀번호 수정 성공';
  }

  //   @Args('email') email: string,
  //   @Args('password') password: string,
  // ): Promise<User> {
  //   console.log(`${email}의 비밀번호가 수정되었습니다.`);
  //   return this.usersService.updateUserPwd({ email, password });
  // }

  @UseGuards(gqlAuthAccessToken)
  @Query(() => String)
  fetchLoginUser(): string {
    return '인가에 성공했습니다.';
  }
}
