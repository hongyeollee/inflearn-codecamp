import axios from "axios";

//javascript는 작동방식이 기본적으로 비동기 방식으로 런타임 환경을 수행한다.


//비동기방식
const fetchPost=()=>{
  const result = axios.get('https://koreanjson.com/posts/1')
  console.log(`post1:`,result)
}
fetchPost()

//동기방식
const fetchPost2=async()=>{
  const result = await axios.get('https://koreanjson.com/posts/1')
  console.log(`post2: `,result.data)
}

fetchPost2()