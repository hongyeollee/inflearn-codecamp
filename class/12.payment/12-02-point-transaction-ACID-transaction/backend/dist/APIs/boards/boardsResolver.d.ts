import { BoardsService } from './boardsService';
import { Board } from './entities/boardEntity';
import { CreateBoardInput } from './dto/create-board.input';
export declare class BoardsResolver {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    fetchBoards(): Board[];
    creatBoard(createBoardInput: CreateBoardInput): string;
}
