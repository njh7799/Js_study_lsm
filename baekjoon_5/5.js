// 최댓값을 M이라고 한다. 그리고 모든 점수를 점수/M*100으로 고친다.
//성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성

var li = [40, 80, 60];
var max = Math.max.apply(null, li);
var hap = 0;

for (var i = 0; i < li.length; i++) {
  hap += (100 * li[i]) / max;
}

var mean = hap / li.length;
console.log(mean);
