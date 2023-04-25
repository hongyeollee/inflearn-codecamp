//파사드패턴 : 각각의 소규모의 함수를 생성하여 하나의 API에 가독성있게 함수의 기능들을 빌드업하는것

//핸드폰 번호 검증
export const checkValidationPhone = (phoneNumber) =>{
    if(phoneNumber.length !== 10 && phoneNumber.length !==11){
        console.log("에러발생!! 핸드폰 번호를 올바르게 입력해주세요.")
        return false
    } else {
        return true
    }
}

// 6자리 토큰 발급
export const getToken =()=>{
    const tokenLength=6

    const result = String(Math.floor(Math.random() * 10 ** tokenLength)).padStart(tokenLength,"0")
    return result
}

//검증된 핸드폰번호로 6자리의 토큰을 발급하여 핸드폰에 전송
export const sendTokenPhone = (phoneNumber,token) =>{
    console.log(phoneNumber,`번호로 토큰번호 ${token}를 전송합니다.`)
}