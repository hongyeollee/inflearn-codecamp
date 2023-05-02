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

//구조분해할당에서 미리 변수를 선언하고 파라미터를 변수에 설정하여 입력한다.
const name = "영희"
const age = 7
const school = "토끼초등학교"
const createAt = new Date()

getWelcomeTemplate({name,age,school,createAt})
//shortable property 를 통한 파라미터 입력
//getWelcomeTemplate({name : name, age:age, school:school, createAt:createAt})
