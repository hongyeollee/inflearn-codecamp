const getToken = (number) =>{
    if(number === undefined||null|NaN){
        const err = console.log("에러입니다. 갯수를 명확하게 입력해주세요")
        return err
    }
    if(number <= 0){
        const err = console.log("0보다 작은 숫자는 기입할 수 없습니다. 0보다 큰 수를 기입해주세요.")
        return err
    }
    if(number>10){
        const err = console.log("숫자가 너무 높습니다. 10이하로 작성해주세요.")
        return err
    }

    const result = String(Math.floor(Math.random() * 10 ** number)).padStart(number,"0")
    console.log(result)
}

getToken(12)