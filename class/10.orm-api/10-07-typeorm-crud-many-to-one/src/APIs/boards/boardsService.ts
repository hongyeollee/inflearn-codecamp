import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/boardEntity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

@Injectable({ scope: Scope.DEFAULT }) //->injection-scope : 싱글톤(new 한 번)으로 할래?
//                                     //Request(매 요청마다 new) 할래?
//                                    //Treansient(매 주입마다 new) 할래?
//위의 Injectabledl 없으면 기본적으로 싱글톤으로 된다.
export class BoardsService {
  findAll(): Board[] {
    //1. 데이터를 조회하는 로직 =>DB에 접속해서 데이터 꺼내오기
    const result = [
      { number: 1, writer: '철수', title: '제목1', contents: '내용1' },
      { number: 2, writer: '영희', title: '제목2', contents: '내용2' },
      { number: 3, writer: '훈이', title: '제목3', contents: '내용3' },
    ];
    //2. 데이터를 꺼내온 결과 응답해주기
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    //1. 데이터를 작성하는 로직 => 작성된 내용을 DB에 저장시켜주도록 전달
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    //2. DB에 접속 후, 데이터 저장

    //2. 저장결과 응답 주기
    return '등록에 성공했습니다.';
  }
}
