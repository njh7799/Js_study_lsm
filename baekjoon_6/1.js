function sum(...args) {
  let res = 0;
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    res += Number(args[i]);
  }
  return res;
}
console.log(sum(1, 2, 3, 4));
