//734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
//두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

var a = 734;
var b = 893;

function trans(i) {
  var il = i % 10;
  var sib = ((i % 100) - (i % 10)) / 10;
  var baek = (i - (i % 100)) / 100;
  return 100 * il + 10 * sib + baek;
}

if (trans(a) > trans(b)) {
  console.log(trans(a));
} else {
  console.log(trans(b));
}
