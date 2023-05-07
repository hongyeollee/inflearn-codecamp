import { CashService } from "../services/cashServise.js";
import { ProductService } from "../services/productServise.js";

export class ProductController {
  cashService;
  productService;

  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    //1. 가진 돈 검증하는 코드(class로 10줄 ->2줄->의존성주입으로 1줄로 줄음. 코드 유지보수 좋아짐)
    const hasMoney = this.cashService.checkValue();

    //2. 판매여부 검증하는 코드
    //const productService = new ProductService();
    const isSoldout = this.productService.checkSoldout();
    //3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("구매 성공");
    }
  };

  refundProduct = (res, req) => {
    //1. 판매여부 검증하는 코드(class로 10줄 정도가 2줄->의존성주입으로 1줄로 줄음. 코드 유지보수 좋아짐)
    //const productService = this.productService.checkValue();
    const isSoldout = this.productService.checkSoldout();
    //2. 상품 환불하는 코드
    if (isSoldout) {
      req.send("환불 성공");
    }
  };
}
