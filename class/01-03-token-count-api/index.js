const createTokenOfPhone = (phoneNumber) =>{
    // 1.핸드폰번호 자릿수 맞는지 확인
    if(phoneNumber.length !== 10 &&phoneNumber.length !== 11){
        const error = console.log("에러발생! 핸드폰번호를 정확하게 입력해주세요")
        return error
    }
    // 2.토큰번호 6자리 만들기
    const token = String(Math.floor(Math.random() * 10 ** 6)).padStart(6,"0")
    console.log(token)

    // 3.생성된 토큰번호 핸드폰으로 전송
    console.log(phoneNumber,`번호로 토큰번호 ${token}를 전송합니다.`)
}

createTokenOfPhone("01027832737")