import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateResult } from 'typeorm';
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

  @Mutation(() => Boolean)
  deleteUser(
    @Args('email') email: string, //
  ): Promise<boolean> {
    return this.usersService.delete({ email });
  }

  @Mutation(() => User, { nullable: true })
  updateUser(
    @Args('name') name: string,
    @Args('age') age: number,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UpdateResult> {
    return this.usersService.update({ name, age, email, password });
  }

  @UseGuards(gqlAuthAccessToken)
  @Query(() => String)
  fetchUser(): string {
    return '인가에 성공했습니다.';
  }

  @Query(() => [User], { nullable: true })
  fetchUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
