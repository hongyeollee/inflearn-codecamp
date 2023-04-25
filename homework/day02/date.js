
const date = new Date()
const yyyy = date.getFullYear()
const mm = (date.getMonth()+1).toString().padStart(2,0)
const dd = (date.getDate()).toString().padStart(2,0)
const hh = date.getHours()
const mn = date.getMinutes()
const ss = date.getSeconds()


const getNowDayAndTime=()=>{
    console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${mn}:${ss}입니다.`)
}

getNowDayAndTime()
