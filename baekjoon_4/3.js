//N의 사이클 길이를 출력한다.
const a = 26;
var b = a;
if (b < 10) {
  b = Number("0" + String(b));
}
while (var i=0; b!==a; i++) {
  b = (b % 10) * 10 + (((b % 10) + (b - (b % 10)) / 10) % 10); 
}
console.log(i);
