//파사드패턴 : 각각의 소규모의 함수를 생성하여 하나의 API에 가독성있게 함수의 기능들을 빌드업하는것
import coolsms from 'coolsms-node-sdk'

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
export const sendTokenPhone = async(phoneNumber,token) =>{
    const SMS_KEY = process.env.SMS_KEY
    const SMS_SECRET_KEY = process.env.SMS_SECRET_KEY
    const SMS_SENDER = process.env.SMS_SENDER

    const sms = coolsms.default
    const messageService = new sms(SMS_KEY,SMS_SECRET_KEY);
    
    const result = await messageService.sendOne(
        {
          to: phoneNumber,
          from: SMS_SENDER,
          text: `[sms발송 API test] 요청하신 인증번호는 [${token}]입니다.`
        }
      ).catch(err => console.error(err));
    console.log(`[sms 발송 API test]${phoneNumber}로 인증번호 ${token}을 발송하였습니다.📤`)
    console.log(`콘솔 result 값: `,result)
}