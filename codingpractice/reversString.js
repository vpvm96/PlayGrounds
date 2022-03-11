{
  // 문자열 거꾸로 출력하기
  function reverse(str) {
    var reverStr = "";
    for(var i = str.length - 1; i >= 0; i--) {
      reverStr = reverStr + str.charAt(i);
    } return reverStr;
  }
  console.log(reverse("Hello"));
}

