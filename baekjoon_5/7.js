//평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
var a = "5 50 50 70 80 100".split(" ");
var hap = 0;
for (var i = 0; i < a.length; i++) {
  hap += Number(a[i]);
}
var mean = hap / a.length;
var num = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] > mean) {
    num += 1;
  }
}

var ratio = num / a.length;
console.log(ratio);
