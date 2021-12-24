for(let i = 1; i <= 9; i++) {
  for(let j = 1; j <= 9; j++) {
    if(i * j % 2 === 0) {
      console.log(i * j);
    }   
  }
}

for(let i = 1; i <= 9; i++) {
  for(let j = 1; j <= 9; j++) {
    switch(i * j){
      case `${i * j % 2 === 0}` :
        console.log(i * j);
        break;    
  }
}}
let i = 1;

while(i <= 9) {
  let j = 1;

  while(j <= 9) {
    console.log(i + " * " + j + " = " + i * j);
    j++;
  }
  i++;
}

const gugudan = () => {
  for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}
gugudan();



class Gugu {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  gugu() {
    for(let i = 1; i <= 9; i++) {
      for(let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
      }
    }
  }
  plus() {
    const c = this.a + this.b;
    return c; 
  }
  
  check(a) {
    if(a % 2 === 0) {
      return true;
    }else {
      return false;
    }
  }

}

const gugugugu = new Gugu(1, 2);

// gugugugu.gugu();
// console.log(gugugugu.plus());
if(gugugugu.check(0)) {
  console.log("짝수입니다.");  
} else {
  console.log("홀수입니다.");
}
