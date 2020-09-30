//"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
//OX퀴즈의 결과가 주어졌을 때, 점수를 구해라.

var a= "OOOOXOOOOXOOOOX".split("X")
var score=0
for (var i=0; i<a.length; i++){
    for (var j=1; j<a[i].length+1; j++){
        score+=j
    }
}
console.log(score)