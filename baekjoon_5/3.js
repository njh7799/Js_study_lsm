//첫째 줄에는 A×B×C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A×B×C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.
var li = [150, 266, 427];
gob = 1;
for (var i = 0; i < li.length; i++) {
  gob = li[i] * gob;
}
gob = String(gob);
gob_li = gob.split("");

for (var j = 0; j < 10; j++) {
  var gaesu = 0;
  for (var i = 0; i < gob_li.length; i++) {
    if (j == gob_li[i]) {
      gaesu += 1;
    }
  }
  console.log(gaesu);
}
