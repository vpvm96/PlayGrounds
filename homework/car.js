/**
 * Car 클래스를 만들자.
 * 차의 기름은 100이 최고다.
 * 악셀을 밟으면 기름이 1씩 줄어든다.
 * 악셀을 밟으면 속도가 0부터 10씩 증가한다. ( 이 속도는 사용자에게 알려줌. )
 * 브레이크를 밟으면 속도가 10씩 감소한다. ( 이 속도 또한 사용자에게 알려줌. )
 * 기름이 0이 되면 사용자에게 기름이 부족하다고 알려준다.
 * Car 클래스는 기름을 채울 수 있다.
 * 만약 100이 넘어가면 그냥 100으로 저장한다.
 * 기름이 0이면 차는 이동하지 않는다.
 */

class Car {
  constructor(oil, speed) {
    this.oil = oil;
    this.speed = speed;
  }
  getMove() {
    switch ((oil, speed)) {
      case `${this.oil <= 0}`:
        console.log(`기름이 부족합니다`);
        break;
      case `${this.oil > 0}`:
        this.speed += 10;
        this.oil--;
        console.log(`차량 속도 ${this.speed}`);
        console.log(`현재 기름 ${this.oil}`);
        break;
    }
  }

  getBreack() {
    switch (speed) {
      case `${this.speed > 0}`:
        this.speed -= 10;
        console.log(`차량 속도 ${this.speed}`);
    }
  }

  getCharge() {
    for(this.oil = 0; this.oil <= 100; this.oil++) {
      console.log(`충전된 기름 ${this.oil}`);
    }
  }
}

const status = new Car(100, 0);

console.log();
