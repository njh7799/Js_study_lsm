// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.

function solve(s, r) {
  res = " ";
  var li = s.split("");
  for (var i = 0; i < li.length; i++) {
    for (var j = 0; j < r; j++) {
      res += String(li[i]);
    }
  }
  return res;
}
console.log(solve("ABC", 3));
