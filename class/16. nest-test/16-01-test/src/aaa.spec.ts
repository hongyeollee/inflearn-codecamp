// 1. 한 개 테스트하기
it('더하기 테스트', () => {
  const a = 2;
  const b = 3;

  expect(a + b).toBe(5);
});

// 2. 여러개 묶음으로 테스트하기

describe('나의 테스트 그룹', () => {
  it('더하기 테스트', () => {
    const a = 2;
    const b = 3;

    expect(a + b).toBe(5);
  });

  it('곱하기 테스트', () => {
    const a = 2;
    const b = 2;

    expect(a + b).toBe(4);
  });
});

// 3. 상품 구매하기 테스트 예제

describe('상품구매 테스트', () => {
  //beforeAll(() => {}); //모든 it를 실행하기 전에 딱 1번 실행 [모든걸 하기전에 들어가야하는거] ex.로그인
  //beforeEach(() => {}); //각각의 it를 실행하기 전에 매번 실행 [초기값 설정] ex. 무엇2하기 전에 무엇1 실행(초기화)

  it('돈 검증하기', () => {
    const result = true; //돈이 충분하다고 가정

    expect(result).toBe(true);
  });

  it('상품 구매하기', () => {
    const result = true; //상품을 구매했다고 가정

    expect(result).toBe(true);
  });
});
