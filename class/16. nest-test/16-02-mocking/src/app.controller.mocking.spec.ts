import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

class MockAppservice {
  getHello(): string {
    return '나는 가짜다';
  }
}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService, //provide에 AppService라는 이름을 활용할 것이다.
          useClass: MockAppservice, // provide에 AppService라는 이름을 활용하는 이때 MockAppService라는 class를 사용할 것이다.
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World!를 리턴해야함.', () => {
      expect(appController.getHello()).toBe('나는 가짜다'); //이 내용은 mocking으로 설정한 값이라 주석내용으로 test를 해야 pass가 된다.
      //expect(appController.getHello()).toBe('Hello World!'); //해당 내용으로 test를 하면 현재 provider가 mocking class를 사용하기 때문에 test가 fail로 뜬다
    });
  });
});
