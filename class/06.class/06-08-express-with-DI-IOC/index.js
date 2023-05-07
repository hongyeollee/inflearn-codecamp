//const express = require('expess') =>commonjs방식으로 이번 실습은 module type으로 진행하기 위해 주석처리
import express from "express";
import { ProductController } from "./mvc/controllers/productController.js";
import { CouponController } from "./mvc/controllers/couponController.js";
import { CashService } from "./mvc/services/cashServise.js";
import { ProductService } from "./mvc/services/productServise.js";
import { PointService } from "./mvc/services/pointServise.js";

const app = express();
const PORT = 3000;

//의존성 주입
const productService = new ProductService();
const cashService = new CashService();
const pointService = new PointService();
//의존성주입으로 생기는 장점
//1.new 하나 작성으로 모든곳에서 재사용 가능(=싱글톤 패턴)으로인해 메모리 사용을 줄일 수 있다.(하나의 new만 생성하면 되기 때문에)
//2.의존성 주입으로 하나의 상수선언에 대해서만 바꾸면 한꺼번에 controller에 변경 가능

//부가적인 설명
//1. productController가 CashService에 의존하고있음(CashService => 의존성)
//->이 상황을 "강하게 결합되어있다"고 표현(tight-coupling)

//2. 이를 개선하기 위해 "느슨한 결합"(loose-coupling)으로 변경할 필요가 있음
//->이를 `의존성 주입` 으로 해결(Dependency Injection =>DI)

//> 이는 의존성주입(DI)로 생기는 장점을 활용하기 위한 것임

//상품 API
const productController = new ProductController(cashService, productService);
app.post("/product/purchase", productController.buyProduct); //상품 구매 API
app.post("/product/refund", productController.refundProduct); //상품 환불하기 API

//쿠폰(상품권)) API
const couponController = new CouponController(pointService);
app.post("/coupon/buy", couponController.buyCoupon); //상품권을 돈주고 구매하는 API

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
