export const checkDashRegisterNumber = (registNumber) =>{
    if(!registNumber.includes("-")){
        console.log("에러발생!!! 형식이 올바르지 않습니다!!!")
        return false
    } else {
    return true
    }
}

export const checkLengthRegisterNumber = (registNumber) => {
    const front = registNumber.substring(0,6);
    const back = registNumber.substring(7);

    if(front.length !==6 || back.length !==7){
        console.log("에러발생!!! 개수를 제대로 입력해주세요!!!")
        return false
    }else{
        return true
    }
}


export const hideBackNumber =(registNumber)=>{
    const hide = '******';
    return console.log(registNumber.substring(0,8)+hide)
}