class 공중부품{
  run=()=>{
    console.log('날아서 도망가자')
  }
}

class 지상부품{
  run=()=>{
    console.log('뛰어서 도망가자')
  }
}

//monster를 만드는것이 아닌 monster를 만들기 위한 하나의 '설명서'라고 생각해야 한다. 
class Monster{
  power
  부품

  constructor(power,부품){
    this.power=power
    this.부품=부품
  }

  attack=()=>{
    console.log("공격!")
    console.log("내 공격력은" +this.power+ "입니다.")
  }

  run=()=>{
    this.부품.run()
  }
}

const mymonster1=new Monster(10,new 공중부품())
mymonster1.attack()
mymonster1.run()

const mymonster2=new Monster(30,new 지상부품())
mymonster2.attack()
mymonster2.run()