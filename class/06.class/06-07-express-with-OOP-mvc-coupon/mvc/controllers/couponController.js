import { CashService } from "../services/cash."

export class CouponController{
  buyCoupon=(req,res)=>{
    // 가진 돈 검증하는 코드
    const cashService=new CashService()
    const hasMoney=cashService.checkValue()    
    //쿠폰(상품권)) 구매 코드
    if(hasMoney){
      res.send('쿠폰(상품권) 구매 성공')
    }
  }
}