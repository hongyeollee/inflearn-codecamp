import * as dotenv from "dotenv";
dotenv.config();
//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import mongoose from "mongoose";

import { checkValidationPhone, getToken, sendTokenPhone } from "./phone.js";
import { options } from "./swagger/config.js";
import { Board } from "./models/boardModel.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.json());

app.get("/boards", async (req, res) => {
  //console.log(`기능 작동 확인`);
  const result = await Board.find();
  //2. 데이터를 꺼내온 결과 응답해주기
  res.send(result);
});

app.post("/boards", async (req, res) => {
  console.log(`req.body 값: `, req.body);
  console.log("==================");
  //1. 브라우저에서 보내준 데이터 확인하기
  console.log(`첫번째 콘솔 req: `, req);
  //2. DB에 접속 후, 데이터를 저장
  const data = new Board({
    writer: req.body.writer,
    title: req.body.title,
    content: req.body.content,
    //age:req.body.age boardModel.js에서 age가 없기때문에 age는 저장이 되지않는다.
    //mongoose에서 필터링이 진행중이기 때문에..하지만 compass(GUI)로는 등록이 가능하다.
    //mongoose는 백엔드쪽에서 DB에 넘어갈떄 방화벽역할을 하는 정도이다.
  });

  data.save();

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

mongoose.set("debug", true);

mongoose
  .connect("mongodb://my-database:27017/mydocker") //네임 리졸류션으로 uri가 my-database로 작성되어야함.
  .then(() => console.log(`DB connecting success`))
  .catch(() => console.log(`DB connect Failed`));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
