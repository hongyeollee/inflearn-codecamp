import { user } from "./createUser.js"

// createUSer.js 구조분해 할당

const creatUSerTemplate = (user)=>{
    const result = `
    <html>
        <body>
            <h1>${user.name}님 가입을 환영합니다.</h1>
            <hr>
            <div>이메일: ${user.email}</div>
            <div>주민번호: ${user.customRegistNumber("210510-1010101")}</div>
            <div>휴대폰 번호: ${user.phone}</div>
            <div>내가 좋아하는 사이트: ${user.likeDomain}</div>
        </body>
    </html>
    `
    return console.log(result)
}

creatUSerTemplate(user)