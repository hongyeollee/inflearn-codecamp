import { checkValidationPhone,getToken
,sendTokenPhone } from "./phone.js"

//토큰번호 핸드폰 전송 API
const createTokenOfPhone=(phoneNumber)=>{
    //1.핸드폰검증
    const isValid = checkValidationPhone(phoneNumber)
    //2.6자리 토큰발급
    if(isValid){
        const token = getToken()
        //3.핸드폰 번호로 토큰번호 발급하여 전송
        sendTokenPhone(phoneNumber,token)
    }
}

createTokenOfPhone("01027832737")