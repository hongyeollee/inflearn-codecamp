import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT }) //->injection-scope : 싱글톤(new 한 번)으로 할래?
//                                     //Request(매 요청마다 new) 할래?
//                                    //Treansient(매 주입마다 new) 할래?
//위의 Injectabledl 없으면 기본적으로 싱글톤으로 된다.
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
