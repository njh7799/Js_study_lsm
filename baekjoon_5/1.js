//N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
const a = 5;
var li = [20, 50, 35, 30, 7];
for (var i = 0; i < li.length; i++) {
  for (var j = 0; j < li.length; j++) {
    if (li[j] < li[j - 1]) {
      var s = li[j];
      var b = li[j - 1];
      li[j] = b;
      li[j - 1] = s;
    }
  }
}
console.log(String(li[0]) + " " + String(li[li.length - 1]));
