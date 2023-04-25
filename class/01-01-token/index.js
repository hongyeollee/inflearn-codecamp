console.log("안녕하세요???")

const getToken = (number) =>{
    const result = String(Math.floor(Math.random() * 10 ** number)).padStart(number,"0")
    console.log(result)
}

getToken(3)


// const addNumber = (a,b)=>{
//     const result = a+b

//     return result
// }

// addNumber(100,200)


// const minusNumber = (a,b)=>{
//     const result = a-b
    
//     return result
// }

// minusNumber(200,100)

// const x = addNumber(100,200)
// const m = minusNumber(200,100)
// const c = x*m

// console.log(c)