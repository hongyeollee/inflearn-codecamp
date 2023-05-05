//타입스크립트 타입 지정하기
const myname: string= "철수"
const breadCount: number= 2
const isActive: boolean= false

//배열형 타입지정하기
const classmates: string[] = ["철수", "영희", "훈이"]
const candyCounts: number[] = [2, 6, 4]
const moneyList1: (number|string)[] = [1000, 2500, 4300,"1000원", "2500원", "4300원"]
const isActiveList: (boolean|string)[]  = [true, false, "false", "true", false]


//객체형 타입지정하기

//a.
interface Iboard1 {
  writer: string
  title: string
  contents: string
}

const createBoardInput: Iboard1 = {
  writer: "영희",
  title: "좋은 날씨 입니다~",
  contents: "오늘은 특히 더 날씨가 좋네요^^"
}

//b.
interface Iboard2 {
  writer: string
  title?: string
  contents: string
}

const updateBoardInput1: Iboard2 = {
  writer: "영희",
  title: "좋은 날씨 입니다~",
  contents: "오늘은 특히 더 날씨가 좋네요^^"
}

const updateBoardInput2: Iboard2 = {
  writer: "훈이",
  contents: "기존에 작성한 글 내용 일부가 수정됐네요"
}


// 싱글톤을 사용하는 이유 => 인스턴스를 재사용하기 위하여
// IoC가 필요한 이유 => 강한 결합으로 인한 의존성을 풀어내기 위하여, 개발자가 아닌 프레임워크 단에서 인스턴스를 관리함
// DI가 필요한 이유 => 관리를 하려면 기존의 인스턴스에 대한 정보를 주입해줘야함. 안하면 뭔지 모르니까, 그래서 IoC 컨테이너에 DI를 하는 것으로 다른 파일에서 사용할 수 있게 함, 생성자로 가져오는 것을 대부분 사용함.

// 1. DI는 무엇의 약자인가요?
    
//     정답 >
    
// 2. DI 이면 싱글톤 패턴인가요?
    
//     정답 >
    

// 1. IOC는 무엇의 약자인가요?
    
//     정답 >
    

// 1. Nest.js에서 IOC 컨테이너가 DI를 해주고 있나요?
    
//     정답 >
    

// 1. javascript 언어로 사용 가능한 Backend 프레임워크에 Nest.js 가 있습니다.
    
//     java 언어로 사용 가능한 Backend 프레임워크에는 Spring 이 있습니다.
    
//     이 둘 모두 해당 프레임워크들에 IOC 컨테이너가 존재하며, DI를 지원하고 있나요?
    
//     정답 >