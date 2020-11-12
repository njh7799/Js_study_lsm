//1부터 45의 일반번호 6개에 보너스 번호 1개
document.addEventListener("DOMContentLoaded", function(){
    makenum();
});
let nl=['?','?','?','?','?','?','?'];
function makenum(){
    document.getElementById('n0').innerHTML=nl[0]
    document.getElementById('n1').innerHTML=`${nl[1]}`
    document.getElementById('n2').innerHTML=`${nl[2]}`
    document.getElementById('n3').innerHTML=`${nl[3]}`
    document.getElementById('n4').innerHTML=`${nl[4]}`
    document.getElementById('n5').innerHTML=`${nl[5]}`
    document.getElementById('n6').innerHTML=`${nl[6]}`
    for (let i=0; i<7; i++){
        nl[i]=parseInt(1+Math.random()*45)
    }
   
}