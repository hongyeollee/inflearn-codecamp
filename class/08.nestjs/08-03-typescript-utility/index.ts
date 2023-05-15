interface Iprofile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//유틸리티
//=>이미 만든타입으로 효율적으로 조작하여 새로운 타입을 만드는것

//1. Partial 타입(모든 KEY값에 대해서 ?(비 필수값으로 선정)로 만듦)
type aaa = Partial<Iprofile>;

//2. Required 타입(모든 KEY값에 대해서 필수값으로 만듦)
type bbb = Required<Iprofile>;

//3.Pick 타입(필요한것만 골라서 KEY값으로 사용)
type ccc = Pick<Iprofile, "name" | "age">;

//4.Omit 타입(필요하지 않은 KEY값만 제외)
type ddd = Omit<Iprofile, "school">;

//5. Union 타입(
type eee = "철수" | "영희" | "훈이"; //Union 타입
let child1: eee = "철수"; // eee 로 설정해 놓은 값에 대해서만 value값을 활용할 수 있도록 제한함
let child2: string = "사과"; //eee와 다르게 value 값에 대한 제한이 없어서 모든 stirng을 받을 수 있음

//6. Recode 타입
type fff = Record<eee, Iprofile>; //eee 또는 별도의 값을 선정한 것에 대해서 Iprofile의 type을 활용할 수 있다.

// 객체의 key들로 union type 만들기
type ggg = keyof Iprofile; // "name"|"age"|"school"|"hobby"
let myprofile: ggg = "hobby";

// type과 interface의 차이 => interface는 선언병합 가능
interface Iprofile {
  candy: number; //선언병합으로 추가됨
}
//응용예제
let profile: Partial<Iprofile> = {
  candy: 10,
};
