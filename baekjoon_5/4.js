//수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
var li = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];
var rmd = [];
for (var i = 0; i < li.length; i++) {
  rmd.push(li[i] % 42);
}

var uniq_rmd = Array.from(new Set(rmd)); //unique한 값 남기고자 할 때 Array.from(new Set())
console.log(uniq_rmd.length);
