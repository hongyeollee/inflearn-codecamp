"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
let BoardsService = class BoardsService {
    findAll() {
        const result = [
            { number: 1, writer: '철수', title: '제목1', contents: '내용1' },
            { number: 2, writer: '영희', title: '제목2', contents: '내용2' },
            { number: 3, writer: '훈이', title: '제목3', contents: '내용3' },
        ];
        return result;
    }
    create({ createBoardInput }) {
        console.log(createBoardInput.writer);
        console.log(createBoardInput.title);
        console.log(createBoardInput.contents);
        return '등록에 성공했습니다.';
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT })
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boardsService.js.map