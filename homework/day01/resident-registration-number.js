import { checkDashRegisterNumber,checkLengthRegisterNumber,hideBackNumber } from "./checkRegist.js"


const customRegistrationNumber = (registNumber) =>{
    const isCheckDash = checkDashRegisterNumber(registNumber)
    if(isCheckDash){
        const isCheckLength= checkLengthRegisterNumber(registNumber)
        if(isCheckLength){
            hideBackNumber(registNumber)
        }
    }
}

customRegistrationNumber("219510-1010101")
customRegistrationNumber("219510-101010101010101")
customRegistrationNumber("2195101010101")


