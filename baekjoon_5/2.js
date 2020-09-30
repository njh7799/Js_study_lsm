// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
var li = [3, 29, 38, 12, 57, 74, 40, 85, 61];
for (var i = 0; i < li.length - 1; i++) {
  if (li[i] < li[i + 1]) {
    max = li[i + 1];
    i_max = i + 1;
  }
}
console.log(max);
console.log(i_max);
