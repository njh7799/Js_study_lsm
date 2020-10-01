//어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하라
var n = 1000;
var res = 0;
for (var i = 1; i <= n; i++) {
  if (i < 100) {
    res += 1;
  } else if (100 <= i < 999) {
    var il = i % 10;
    var sib = ((i % 100) - (i % 10)) / 10;
    var baek = (i - (i % 100)) / 100;
    if (sib == (il + baek) / 2) {
      res += 1;
    }
  } else {
    continue;
  }
}
console.log(res);
