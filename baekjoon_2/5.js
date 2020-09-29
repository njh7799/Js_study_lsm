const h = 23;
const m = 40;

if (m < 45) {
  if (h !== 0) {
    console.log(String(h - 1) + " " + String(m + 15));
  } else {
    console.log(String(23) + " " + String(m + 15));
  }
} else {
  console.log(String(h) + " " + String(m - 45));
}
