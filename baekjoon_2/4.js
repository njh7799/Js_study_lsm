const a = 12;
const b = 5;

if (a > 0 && b > 0) {
  console.log(1);
} else if (a < 0 && b > 0) {
  console.log(2);
} else if (a < 0 && b < 0) {
  console.log(3);
} else if (a > 0 && b < 0) {
  console.log(4);
}
