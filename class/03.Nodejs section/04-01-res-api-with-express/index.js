//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
const app = express()
const PORT = 3000;

app.get('/',(req,res)=>{res.send("hello world!")})


app.listen(PORT,()=>{console.log(`Example app listening on port ${PORT}`)})