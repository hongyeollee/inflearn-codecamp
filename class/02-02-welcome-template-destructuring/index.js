const getWelcomeTemplate=(user)=>{
    const result = `
        <html>
            <body>
                <h1>${user.name}님 가입을 환영합니다! ! ! </h1>
                <hr/>
                <div>이름 : ${user.name}</div>
                <div>나이 : ${user.age}세</div>
                <div>학교 : ${user.school}</div>
                <div>가입일 : ${user.createAt}</div>
            </body>
        </html>
    `
    console.log(result)
}

const user ={
    name : "하이",
    age : 13,
    school : "호서대학교",
    createAt : new Date()
}


getWelcomeTemplate(user)