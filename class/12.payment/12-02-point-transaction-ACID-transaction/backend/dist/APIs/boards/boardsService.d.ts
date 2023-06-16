import { Board } from './entities/boardEntity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';
export declare class BoardsService {
    findAll(): Board[];
    create({ createBoardInput }: IBoardsServiceCreate): string;
}
