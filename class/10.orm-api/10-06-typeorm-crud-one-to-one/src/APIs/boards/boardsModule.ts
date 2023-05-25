import { Module } from '@nestjs/common';
import { BoardsResolver } from './boardsResolver';
import { BoardsService } from './boardsService';

@Module({
  imports: [],
  providers: [
    BoardsResolver, //
    BoardsService,
  ],
})
export class BoardsModule {}
