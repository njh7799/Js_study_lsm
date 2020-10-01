//정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
function sum(...args) {
  var res = 0;
  for (var i = 0; i < args.length; i++) {
    res += args[i];
  }
  return res;
}
console.log(sum(1, 2, 3));
