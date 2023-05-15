// 1. 문자/숫자/불린 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result1 = getPrimitive("철수", 123, true);

console.log(result1);

//
//
// 2. any 타입(자바스크립트와 동일한 방식으로 작동됨)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // 결과값은 철수100이 나오게 되는데 이는 어떤조합이든 결과값을 도출하지만 의도하지 않은 결과값을 나오게 할 수 있다.
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//
//
// => 1번과 2번의 차이를 비교
// 1번의 경우: 타입에 대해서 추론할 수 있기 때문에 제한적이지만 안정적인 코딩으로 작업할 수 있다.
// 2번의 경우: 타입에 대해서 정해놓지 않았기 때문에 타입에 대한 자율성은 있지만 어떠한 타입의 결과들의 조합으로 의도하지 않은 결과나 오류를 발생시킬 수 있다.

//
//
// 3. unknown 타입
const getUnKnown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 100);
  return [arg3, arg2, arg1];
};

const result3 = getUnKnown("철수", 123, true);

//
//
// 4. generic 타입 - 1
function getGeneric<myType1, myType2, myType3>(arg1: myType1, arg2: myType2, arg3: myType3): [myType3, myType2, myType1] {
  return [arg3, arg2, arg1];
}
//anytype과 다른점은 anytype은 argument(인자)의 함수 호출마다 type이 달라질 수 있지만 generic type으로 설정하게되면 설정한 type에 대해서 계속적으로 고정되어 사용되어진다.
const result4 = getGeneric(
  //<string,number,boolean>
  "철수",
  123,
  true
);
//generic은 변수에 해당하는 함수를 호출하려할때 <>로 미리 type을 선정할 수도 있지만 미리 선정하지 않고 argument를 작성해도 자동으로 type을 인지한다.

//
//
// 5. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result5 = getGeneric2("철수", 123, true);

//
//
// 6. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result6 = getGeneric3("철수", 123, true);

//
//
// 7. generic 타입 - 4(화살표함수 변형)
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result7 = getGeneric4("철수", 123, true);

//
//
// generic 타입 예제
const forRoot = <T>(arg1: T): [T] => {
  return [arg1];
};
const result8 = forRoot<string>("철수");
