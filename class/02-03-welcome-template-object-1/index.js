const getWelcomeTemplate=({name,age,school,createAt})=>{
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

//구조분해할당에서 객체를 미리 변수를 선언하여 그 변수를 함수에 입력한다.
const user ={
    name : "영희",
    age : 7,
    school : "토끼초등학교",
    createAt : new Date()
}

getWelcomeTemplate(user)