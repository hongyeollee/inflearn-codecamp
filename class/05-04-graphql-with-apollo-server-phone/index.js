import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { checkValidationPhone,getToken
,sendTokenPhone } from '../01-05-token-count-api-facade-import/phone.js';


// The GraphQL schema
const typeDefs = `#graphql
  input createBoardInput{
    writer: String
    title: String
    contents: String
  }

  type fetchBoardReturn{
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [fetchBoardReturn]

  }

  type Mutation{
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: createBoardInput): String
    createTokenOfPhone(phoneNumber: String):String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards:()=>{
      //1. 데이터를 조회하는 로직 =>DB에 접속해서 데이터 꺼내오기
      const result = [
        {number : 1, writer : "철수", title : "제목1", contents : "내용1"},
        {number : 2, writer : "영희", title : "제목2", contents : "내용2"},
        {number : 3, writer : "훈이", title : "제목3", contents : "내용3"},
    ]
      //2. 데이터를 꺼내온 결과 응답해주기
      return result
    }
  },

  Mutation: {
    createBoard:(_,args)=>{
        //1. 데이터를 작성하는 로직 => 작성된 내용을 DB에 저장시켜주도록 전달
        console.log(args)

        //2. 저장결과 응답 주기
      return "등록에 성공했습니다."
    },

    createBoard2:(_,args)=>{
      //1. 데이터를 작성하는 로직 => 작성된 내용을 DB에 저장시켜주도록 전달
      console.log(args)

      //2. 저장결과 응답 주기
    return "등록에 성공했습니다."
  },
  createTokenOfPhone:(_,args)=>{
    //1.핸드폰검증
    const isValid = checkValidationPhone(args.phoneNumber)
    //2.6자리 토큰발급
    if(isValid){
        const token = getToken()
        //3.핸드폰 번호로 토큰번호 발급하여 전송
        sendTokenPhone(args.phoneNumber,token)
        return "인증완료!"
    }
  }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
