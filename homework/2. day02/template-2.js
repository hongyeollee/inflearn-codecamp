
// 구조분해할당

const creatUSerTemplate = ({name,email,phone,resgistNumner,likeDomain})=>{
    const result = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다.</h1>
            <hr>
            <div>이메일: ${email}</div>
            <div>주민번호: ${resgistNumner}</div>
            <div>휴대폰 번호: ${phone}</div>
            <div>내가 좋아하는 사이트: ${likeDomain}</div>
        </body>
    </html>
    `
    return console.log(result)
}

const name = "코드캠프"
const email = "support@codebootcamp.co.kr"
const phone = "000-0000-0000"
const likeDomain = "codebootcamp.co.kr"
const customRegistNumber = (customRegistNumber)=> {
        const hide = '******';
        return customRegistNumber.substring(0,8)+hide
    }
const resgistNumner = customRegistNumber("210510-1010101")


creatUSerTemplate({name,email,phone,resgistNumner,likeDomain})