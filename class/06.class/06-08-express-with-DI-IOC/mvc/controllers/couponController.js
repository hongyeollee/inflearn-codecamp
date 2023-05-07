export class CouponController {
  cashService;
  pointService;

  constructor(cashService, pointService) {
    this.cashService = cashService;
    this.pointService = pointService;
  }

  buyCoupon = (req, res) => {
    // 가진 돈 검증하는 코드
    //const cashService = new CashService();
    const hasMoney = this.cashService.checkValue();
    //쿠폰(상품권)) 구매 코드
    if (hasMoney) {
      res.send("쿠폰(상품권) 구매 성공");
    }
  };
}
