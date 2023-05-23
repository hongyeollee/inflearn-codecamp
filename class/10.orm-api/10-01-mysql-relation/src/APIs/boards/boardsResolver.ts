import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boardsService';
import { Board } from './entities/boardEntity';
import { CreateBoardInput } from './dto/create-board.input';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  // @Get('/products/buy')
  @Query(() => [Board], { nullable: true })
  fetchBoards(): Board[] {
    return this.boardsService.findAll();
  }

  @Mutation(() => String, { nullable: true })
  creatBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args({ name: 'contents', nullable: true }) constents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): string {
    return this.boardsService.create({ createBoardInput });
  }
}
