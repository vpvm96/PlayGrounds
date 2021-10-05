const multiply = (a, b) => {
    return a * b;
  }
  console.log(multiply(add(a,b), subtract(a, b)));
  
  //b가 0일 경우 사용자에게 나눌수 없는 값 입니다, 그 외에는 전부 계산.
  const divide = (a, b) => {
    if (b == 0) {
      return "나눌수 없는 값";
    }else {
      return a / b;
    }
  }
  console.log(divide(a, b));
  
  
  let base = 4;
  let height = 8;
  
  
  function triangle (base, height) {
    return base * height / 2;
  }
  console.log(triangle(base, height));
  
  // 사각형 넓이 가로 x 세로 삼각형 밑변 x 높이 / 2
  function square (base, height) {
    return base * height;
  }
  console.log(square(base, height));
  
  function sq (a) {
    return a*a;
  }
  console.log(sq(a));
  
  