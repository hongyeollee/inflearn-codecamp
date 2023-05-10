import * as dotenv from "dotenv";
dotenv.config();
//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { checkValidationPhone, getToken, sendTokenPhone } from "./phone.js";
import { options } from "./swagger/config.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.json());

app.get("/boards", (req, res) => {
  //1. 데이터를 조회하는 로직 =>DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "철수", title: "제목1", contents: "내용1" },
    { number: 2, writer: "영희", title: "제목2", contents: "내용2" },
    { number: 3, writer: "훈이", title: "제목3", contents: "내용3" },
  ];
  //2. 데이터를 꺼내온 결과 응답해주기
  res.send(result);
});

app.post("/boards", (req, res) => {
  console.log(req.body);
  //1. 데이터를 작성하는 로직 => 작성된 내용을 DB에 저장시켜주도록 전달하기

  //2. 저장결과 응답 주기
  res.send({ message: "게시물 저장에 성공하였습니다." });
});

//핸드폰으로 토큰 발송해주기
app.post("/tokens/phone", (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  //1.핸드폰검증
  const isValid = checkValidationPhone(phoneNumber);
  //2.6자리 토큰발급
  if (isValid) {
    const token = getToken();
    //3.핸드폰 번호로 토큰번호 발급하여 전송
    sendTokenPhone(phoneNumber, token);
  }

  res.send("인증완료!");
});

//회원가입해서 환영내용 이메일로 발송 API
app.post("/users", (req, res) => {
  const { name, age, school, email } = req.body;

  const createUser = async (name, age, school, email) => {
    //이메일 존재여부, @ 포함여부로 정상적입력 확인
    const isValid = checkValidationEmail(email);
    if (isValid === false) return;
    //가입완료되면 이메일로 환영메일 작성
    const emailTemplate = getWelcomeTemplate(name, age, school);
    // 작성된 환영메일 메일로 발송
    await sendWelcomeTemplateToEmail(email, emailTemplate);
  };

  createUser(name, age, school, email);

  res.send(`회원가입 및 가입환영 이메일 발송 완료!`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
