//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
import { ProductController } from "../06-06-express-with-OOP-mvc/mvc/controllers/productController.js";

const app = express()
const PORT = 3000; 

//상품 API
const productController=new ProductController()
app.post('/product/purchase',productController.buyProduct)//상품 구매 API
app.post('/product/refund',productController.refundProduct)//상품 환불하기 API

app.listen(PORT,()=>{console.log(`Example app listening on port ${PORT}`)}) 