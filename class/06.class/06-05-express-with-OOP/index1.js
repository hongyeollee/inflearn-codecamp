//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
import { CashService} from "./cash.js";
import { ProductService } from "./product.js";

const app = express()
const PORT = 3000; 

//중고거래 사이트 상품 구매하기 API

app.post('/product/purchase',(req,res)=>{
  //1. 가진 돈 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
  const cashService=new CashService()
  const hasMoney=cashService.checkValue()
  //2. 판매여부 검증하는 코드
  const productService=new ProductService()
  const isSoldout=productService.checkSoldout()
  //3. 상품 구매하는 코드
  if(hasMoney && !isSoldout){s
    res.send("구매 성공")}
  })

//상품 환불하기 API
app.post('/product/refund',(res,req)=>{
  //1. 판매여부 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
  const productService=new ProductService()
  const isSoldout=productService.checkSoldout()
  //2. 상품 환불하는 코드
  if(isSoldout){
    req.send('환불 성공')
  }
})

app.listen(PORT,()=>{console.log(`Example app listening on port ${PORT}`)})