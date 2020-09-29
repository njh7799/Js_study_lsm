/*
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
*/
const a = 472;
const b = 385;
const c = a * (b % 10);
const d = (a * ((b % 100) - (b % 10))) / 10;
const e = (a * (b - (b % 100))) / 100;
console.log(c);
console.log(d);
console.log(e);
console.log(c + 10 * d + 100 * e);
//마지막 줄은 위 3개 다 더한것.
