function solve(s, r) {
  res = " ";
  var li = s.split("");
  for (var i = 0; i < li.length; i++) {
    for (var j = 0; j < r; j++) {
      res += String(li[i]);
    }
  }
  return res;
}
console.log(solve("ABC", 3));

