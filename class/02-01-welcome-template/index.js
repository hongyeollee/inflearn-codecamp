const getWelcomeTemplate=(name,age,school,createAt)=>{
    const result = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다! ! ! </h1>
                <hr/>
                <div>이름 : ${name}</div>
                <div>나이 : ${age}세</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createAt}</div>
            </body>
        </html>
    `
    console.log(result)
}


getWelcomeTemplate("홍열",36,"호서대학교","언제일까?")