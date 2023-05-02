import { getToday } from "./utils.js"


export const checkValidationEmail=(email)=>{
    if(email === undefined || !email.includes("@")){
        console.log("에러발생!!! 이메일을 올바르게 입력해주세요.")
        return false
    } else {
        return true
    }
}

export const getWelcomeTemplate=({name,age,school})=>{

    
    const result = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다! ! ! </h1>
                <hr/>
                <div>이름 : ${name}</div>
                <div>나이 : ${age}세</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${getToday()}</div>
            </body>
        </html>
    `
    return result
}

export const sendWelcomeTemplateToEmail=(email,template)=>{
    console.log(`${email}주소로 ${template}을 전송합니다,`)
}