class Mycar {
  constructor(model, horsePower, color) {
    (this.model = model),
      (this.horsePower = horsePower),
      (this.color = color),
      (this.isRunning = true);
  }
  introduce = () => {
    console.log(
      `제 차는 ${this.model}이고, 마력은 ${this.horsePower}고, 색상은 ${this.color}입니다.`
    );
  };

  start = () => {
    if (this.isRunning) {
      console.log(`${this.model}차량을 출발하겠습니다.`);
    } else {
      console.log(`${this.model}차량의 시동이 꺼져있습니다.`);
    }
  };

  stop = () => {
    if (this.isRunning) {
      console.log(`${this.model}차량을 정지하겠습니다.`);
    } else {
      console.log(`${this.model}차량의 시동이 꺼져있습니다.`);
    }
  };
}

const mycar = new Mycar("k7", 120, "white");
mycar.introduce();
mycar.start();
mycar.stop();
