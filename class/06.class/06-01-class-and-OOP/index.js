// 객체지향(OOP->object Oriented Programming)
// const date = new Date()

// const year=date.getFullYear()
// const month=date.getMonth()+1

// console.log(year)
// console.log(month)

//class Date 생성 예시
class Date{
  qqq=3

  getFullYear(){

  }

  getMonth(){

  }
}


//monster를 만드는것이 아닌 monster를 만들기 위한 하나의 '설명서'라고 생각해야 한다. 
class Monster{
  power=0

  constructor(power){
    this.power=power
  }

  attack=()=>{
    console.log("공격!")
    console.log("내 공격력은" +this.power+ "입니다.")
  }

  run=()=>{
    console.log("도망ㄱㄱ")
  }
}

const mymonster1=new Monster(10)
mymonster1.attack()
mymonster1.run()

const mymonster2=new Monster(50)
mymonster2.attack()
mymonster2.run()