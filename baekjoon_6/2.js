//생성자가 없는 10000이하의 모든 숫자를 나타내라.
// 0이상 9이하 정수 a,b,c,d에 대해 1000a+100b+10c+d+(a+b+c+d)꼴로
//나타나지 않는 수를 구하면 된다. (단 a,b,c,d가 모두 0일때는 제외)
function selfNumber(n) {
  let temp = n;
  let sum = temp;

  while (temp > 0) {
    sum += temp % 10;
    temp = parseInt(temp / 10);
  }
  return sum;
}

const selfNumberCheckArray = new Array(10000);
selfNumberCheckArray.fill(false);

for (i = 1; i <= 10000; i++) {
  selfNumberCheckArray[selfNumber(i)] = true;
  if (!selfNumberCheckArray[i]) {
    console.log(i);
  }
}
// 풀이 새로 만들 것.
