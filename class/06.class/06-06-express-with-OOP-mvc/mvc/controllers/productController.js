import { CashService } from "../services/cash..js"
import { ProductService } from "../services/product.js"

export class ProductController{
  buyProduct=(req,res)=>{
  //1. 가진 돈 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
  const cashService=new CashService()
  const hasMoney=cashService.checkValue()
  //2. 판매여부 검증하는 코드
  const productService=new ProductService()
  const isSoldout=productService.checkSoldout()
  //3. 상품 구매하는 코드
  if(hasMoney && !isSoldout){
    res.send("구매 성공")}
  }

  refundProduct=(res,req)=>{
  //1. 판매여부 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
  const productService=new ProductService()
  const isSoldout=productService.checkSoldout()
  //2. 상품 환불하는 코드
  if(isSoldout){
    req.send('환불 성공')
  }
}
}