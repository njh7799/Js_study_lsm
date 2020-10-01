//N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력
var n = String(111111).split("");
console.log(n);
var res = 0;
for (var i = 0; i < n.length; i++) {
  res += Number(n[i]);
}
console.log(res);
