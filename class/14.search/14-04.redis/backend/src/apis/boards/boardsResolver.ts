import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boardsService';
import { Board } from './entities/boardEntity';
import { CreateBoardInput } from './dto/create-board.input';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // @Get('/products/buy')
  @Query(
    () => String, //[Board],
    { nullable: true },
  )
  async fetchBoards(): Promise<string> {
    //Board[]
    //1. cache에서 조회하는 연습
    const mycache = await this.cacheManager.get('qqq');
    console.log(mycache);
    //2. 조회완료 메시지 전달
    return '캐시에서 조회 완료';
    // 레디스 주석을 위해 잠기 주석걸기
    //return this.boardsService.findAll();
  }

  @Mutation(() => String, { nullable: true })
  async creatBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args({ name: 'contents', nullable: true }) constents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): Promise<string> {
    //1. cache에 등록하는 연습
    await this.cacheManager.set('qqq', createBoardInput, 0);
    //2. 등록완료 메시지 전달
    return '캐시등록완료';

    // 레디스 주석을 위해서 잠시 주석걸기
    //return this.boardsService.create({ createBoardInput });
  }
}
