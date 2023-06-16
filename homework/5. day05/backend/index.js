import express from "express";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJsdoc(options))
);

//회원목록 조회 API만들기
app.get("/users", (req, res) => {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "영희",
      phone: "010-42232-8495",
      personal: "211111-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ccc@gmail.com",
      name: "훈이",
      phone: "010-9009-9594",
      personal: "048374-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ddd@gmail.com",
      name: "맹구",
      phone: "010-1234-5678",
      personal: "849543-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "eee@gmail.com",
      name: "영자",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", (req, res) => {
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 10 },
    { name: "콜드브루", kcal: 15 },
    { name: "카페모카", kcal: 20 },
    { name: "돌체라떼", kcal: 25 },
    { name: "카라멜라떼", kcal: 30 },
    { name: "바닐라라떼", kcal: 35 },
    { name: "에스프레소", kcal: 40 },
    { name: "디카페인", kcal: 45 },
    { name: "오트라떼", kcal: 50 },
  ];

  res.send(result);
});

app.listen(PORT, () => {
  console.log(`homework app listening in PORT ${PORT}`);
});
