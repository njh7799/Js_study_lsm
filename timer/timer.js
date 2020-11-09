document.addEventListener("DOMContentLoaded", function() {

    muchleft();
    setInterval(muchleft, 500);

});

function muchleft(){
    let dday=new Date('December 3,2020,08:40:00').getTime();
let nowtime=new Date().getTime();
let wait=dday-nowtime;
    let y = parseInt(wait/(1000*3600*24*365)); //년
    let d=parseInt(wait%(1000*3600*24*365)/(1000*3600*24)); //일
    let h=parseInt(wait%(1000*3600*24)/(1000*3600)); //시간
    let m=parseInt(wait%(1000*3600)/(60*1000)); //분
    let s=parseInt(wait%(60*1000)/1000);//초
        if (s<10){
            s='0'+String(s)
        }
        document.getElementById('muchleft').innerHTML=`${y}년 ${d}일 ${h}시간 ${m}분 ${s}초`
}