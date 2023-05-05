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

class 공중몬스터 extends Monster{

  constructor(power1){
    super(power1+11)
  }

  //overriding[오버라이딩](재정의)=>부모의 run을 덮어쓰기
  run=()=>{
    console.log("날아서🦋 도망가자")
  }
}

class 지상몬스터 extends Monster{
  constructor(power2){
    super(power2)
  }

  //overriding[오버라이딩](재정의)=>부모의 run을 덮어쓰기
  run=()=>{
    console.log("뛰어서🏃🏻‍♂️ 도망가자")
  }
}

const mymonster1=new 공중몬스터(20)
mymonster1.attack()
mymonster1.run()

const mymonster2=new 지상몬스터(50)
mymonster2.attack()
mymonster2.run()