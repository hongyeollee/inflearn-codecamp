import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateResult } from 'typeorm';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }

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

  @Query(() => [User], { nullable: true })
  fetchUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  fetchUser(@Args('email') email: string): Promise<User> {
    return this.usersService.findOne({ email });
  }
}
