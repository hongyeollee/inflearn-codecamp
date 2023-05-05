//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
const app = express()
const PORT = 3000; 

//중고거래 사이트 상품 구매하기 API

app.post('/product/purchase',(req,res)=>{
  //1. 가진 돈 검증하는 코드(대략 10줄 정도 코드가 작성됐다고 가정)
  //...
  //...
  //...
  //2. 판매여부 검증하는 코드(대략 10줄 정도 코드가 작성됐다고 가정)
  //...
  //...
  //...
  //...
  //3. 상품 구매하는 코드
  // if(돈있음 && !판매완료){
  //   res.send("구매 성공")}
  })



//상품 환불하기 API
app.post('/product/refund',(res,req)=>{
  //1. 판매여부 검증하는 코드(대략 10줄 정도 코드가 작성됐다고 가정)
  //...
  //...
  //...
  //2. 상품 환불하는 코드
  if(판매완료){
    req.send('환불 성공')
  }
})

app.listen(PORT,()=>{console.log(`Example app listening on port ${PORT}`)})