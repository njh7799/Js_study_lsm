//1부터 45의 일반번호 6개에 보너스 번호 1개
document.addEventListener("DOMContentLoaded", function(){//addEventListener 찾아보기
    makenum();
});
let nl=['?','?','?','?','?','?','?'];
function makenum(){ //함수의 이름인 makenum. 근데 지금 함수이름에 맞는 기능외에 추가적으로 더 하고 있다.
    document.getElementById('n0').innerHTML=nl[0]
    document.getElementById('n1').innerText=nl[1]
    document.getElementById('n2').innerHTML=nl[2]
    document.getElementById('n3').innerHTML=nl[3]
    document.getElementById('n4').innerHTML=nl[4]
    document.getElementById('n5').innerHTML=nl[5] //innertext: 단순 텍스트 innerHTML
    document.getElementById('n6').innerHTML=nl[6]
    for (let i=0; i<7; i++){
        nl[i]=parseInt(1+Math.random()*45)
        //document.getElementById(`n{i}`).innerHTML=`${nl[i]}`
    }
    // 로또는 중복인 숫자가 없음
    //무언가 의미없는 반복을 줄이자
}