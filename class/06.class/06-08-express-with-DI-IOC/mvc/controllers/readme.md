# 의존성 주입

### DI(dependency injection)

```js
//productController.js

export class ProductController {
  buyProduct = (req, res) => {
    //1. 가진 돈 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
    const cashService = new CashService();
    const hasMoney = cashService.checkValue();
    //2. 판매여부 검증하는 코드
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();
    //3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("구매 성공");
    }
  };

  refundProduct = (res, req) => {
    //1. 판매여부 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();
    //2. 상품 환불하는 코드
    if (isSoldout) {
      req.send("환불 성공");
    }
  };
}
```

위에서 보면 `productController`에서의 buyProduct안에서 `CashService` 와 `productService` 를보면
관계에 대해서 분석할때 `productcController는 CashService에 의존하고있다.` 로 표현할 수 있다.
이를 `의존성`이라고 표현한다.

```js
//productController.js
export class ProductController {
  myCashService;

  constructor(aaa) {
    this.myCashService = aaa;
  }

  buyProduct = (req, res) => {
    //1. 가진 돈 검증하는 코드(class로 10줄 정도가 2줄로 줄음=>코드 유지보수 좋아짐)
    const hasMoney = this.myCashService.checkValue();
    //2. 판매여부 검증하는 코드
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();
    //3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("구매 성공");
    }
  };
}

//의존성 주입
const cashService = new CashService(); //로 정의하고
const productController = new ProductController(cashService); //로 의존성 주입을 시킨 후
```

이렇게 되면 의존성을 주입한

```
const cashService=new CashService()
```

가 아닌 pointService를 하게 되는경우에는

```
const pointService=new PointService()로 바꾸고자 할때는 productController에서 cashService를 pointService로만 바꿔주면 된다.
```

### 의존성주입으로 생기는 장점

1. new 하나 작성으로 모든곳에서 재사용 가능(=싱글톤 패턴)으로인해 메모리 사용을 줄일 수 있다.(하나의 new만 생성하면 되기 때문에)
2. 의존성 주입으로 하나의 상수선언에 대해서만 바꾸면 한꺼번에 controller에 변경 가능

#### 부가적인 설명

1. productController가 CashService에 의존하고있음(CashService => 의존성)
   ->이 상황을 "강하게 결합되어있다"고 표현(tight-coupling)

2. 이를 개선하기 위해 "느슨한 결합"(loose-coupling)으로 변경할 필요가 있음
   ->이를 `의존성 주입` 으로 해결(Dependency Injection =>DI)

   > 이는 의존성주입(DI)로 생기는 장점을 활용하기 위한 것임

3. 이 역할을 대신 해주는 Nest.js 기능 = IoC 컨테이너(제어가 역전됐다는 의미로 알아서 new로 생성해서 넣어줌. 즉, 알아서 DI 해줌)
   IoC : Inversion of Control

4. '의존성 주입'으로 `싱글톤 패턴` 구현이 가능해짐
   => 여기서, "의존성 주입"이면, '싱글톤 패턴'인가? -> 그렇지 않음.
   => 왜냐하면 변수(상수)의 선언의 이름은 달라도 new의 기능은 똑같이 사용할 수 있기 때문
   ex-
   ```js
   const cashService1 = new CashService();
   const cashService2 = new CashService();
   //다른 API에 주입.
   //이렇게 되면 의존성주입을은 하는 것이지만 싱글톤 패턴이라고 할 수는 없기때문.
   ```
