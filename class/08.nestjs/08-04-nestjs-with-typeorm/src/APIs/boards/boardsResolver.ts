import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boardsService';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  // @Get('/products/buy')
  @Query(() => String, { nullable: true })
  fetchBoards(): string {
    return this.boardsService.getHello();
  }
}
