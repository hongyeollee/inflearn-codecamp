//타입추론
let aaa="안녕하세요."
//aaa=3 ->error 

//타입명시
let bbb: string = "반갑습니다."
//bbb=10 ->error

//타입명시가 필요한 상황 -> 문자열 '또는' 숫자로
let ccc : string | number=1000
ccc="1000원"

//숫자타입
let ddd: number=10
ddd=10//"철수"-->error

//boolean
let eee: boolean=true
eee=false
eee=true//"false"//문자열이기 때문에 잘못된 표기임, 자바스크립트에서는 정상임

//boolean type false인 경우
0
"" // "false"는 참임(문자열 안에 내용이 들어가있기 때문)
NaN
null
undefined

//배열타입
//let fff: number[] = [1,2,3,4,5,"갑분문자열"]//갑분문자열때문에 오류남
//let ggg: string[] = ["문","자","열",1]//1 때문에 오류남
let hhh= ["문","자","열",1] ///hhh 에 커서를 올려놓으면 타입을 알 수 있다.

//객체타입
interface Iprofile{
  name: string
  age: number |string
  school: string
  hobby?: string // ?-> 있어도 되고 없어도 됨을 의미 
}


const profile: Iprofile={
  name : "철수",
  age: 8,
  school: "다람쥐초등학교"
}

//interface Iprofile이 선언되지 않을때.
profile.name="영희" //정상
profile.age="8살"//type이 다르기때문에 오류
profile.hobby="러닝"//key값이 없기때문에 오류

//interface Iprofile이 선언될때
profile.name="영희"
profile.age="8살"
profile.hobby="러닝"


//함수타입
// const add=(num1,num2,unit)=>{}
// add(1000,2000,"원")
// => 함수는 타입추론이 되지 않는다.

// 함수타입은 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음(반드시 타입명시 필요!)
const add=(num1: number,num2: number,unit:string):string=>//밖의 string은 함수의 return
{return num1+num2+unit}

const result = add(1000,2000,"원")//결과의 return 타입도 예측가능

//any타입 (지양함) => 자바스크립트와 동일하게 작동됨
let qqq: any="철수" 
qqq=123
qqq=true