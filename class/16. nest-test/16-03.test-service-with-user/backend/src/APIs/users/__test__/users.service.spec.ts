import { Test } from '@nestjs/testing';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../users.service';
import {
  ConflictException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

//나만의 데이터베이스 만들기
class MockUsersRepository {
  mydb = [
    { email: 'a@a.com', password: '0000', name: '짱구', age: 8 },
    { email: 'qqq@qqq.com', password: '1234', name: '철수', age: 12 },
  ];
  findOne({ where }) {
    const users = this.mydb.filter((el) => el.email === where.email);
    //console.log('users.length값: ', users.length);
    if (users.length) return users[0];
    return null;
  }
  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age }; //{ email, password, name, age };
  }
}

describe('UsersService', () => {
  let usersService: UsersService;
  beforeEach(async () => {
    const usersModule = await Test.createTestingModule({
      //imports:[TypeOrmModule...],
      controllers: [],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        },
      ],
    }).compile();

    usersService = usersModule.get<UsersService>(UsersService);
  });
  // describe('findOneByEmail', () => {
  //   const result = usersService.findOneByEmail({ email: 'a@a.com' });
  //expect(result).toStrictEqual({ email: 'a@a.com', name: '짱구' });
  // });
  // 이런식으로 진행하지만 위와 같은 코드는 실제 database를 관여할 수 있기 때문에 mocking이 필요하다.
  // create로 mocking 작업을 통해서 test해본다.

  describe('create', () => {
    it('이미 존재하는 이메일인지 검증', async () => {
      const myData = {
        email: 'a@a.com',
        password: '1234',
        name: '철수',
        age: 13,
      };
      try {
        await usersService.create({ ...myData });
      } catch (err) {
        expect(err).toBeInstanceOf(ConflictException);
        //expect(err).toBeInstanceOf(UnprocessableEntityException);
        //주석처리의 expect를 사용하면 에러가 발생할 것임. because 의도한 예외규칙 에러가 아니기에...
      }
    });

    it('회원등록 성공 test', async () => {
      const myData = {
        email: 'b@b.com',
        password: '1234',
        name: '철수',
        age: 13,
      };

      const result = await usersService.create({ ...myData });
      //console.log('리절트값', result);
      delete result.password;
      //아래 주석은 delete result.password와 같다. 아래주석은 구조분해할당 사용
      //const {password, ...rest}=result
      //expect(rest).toStrictEqual()
      expect(result).toStrictEqual({
        email: 'b@b.com',
        name: '철수',
        age: 13,
      });
    });
  });
});
