function main() { //document let gpa=document.getElementById('gpa')
    let gpa=document.getElementById('gpa')
    let bul=[1.59, 2.39, 2.64, 3.11, 3.45]
    let hap=[3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66]
    document.getElementById('result').innerHTML=`합격자 중에서 ${find_rank(gpa, hap)}등, 불합격자 중에서 ${find_rank(gpa, bul)}등<br>
    합격자 평균인 ${avg(hap)} ${say_last(gpa,avg(hap))}.<br> 불합격자 평균인 ${avg(bul)} ${say_last(gpa,avg(bul))}.`
}

// 보환융 
//불합격
// 지원시기, 학점
// 2016_1, 1.59
// 2015_2, 2.39
// 2019_2, 2.64
// 2018_2, 3.11
// 2019_1, 3.45

// 합격
// 2016_1, 3.25
// 2017_2, 3.26
// 2018_2, 3.31
// 2015_2, 3.39
// 2016_2, 3.6
// 2019_2, 3.64
// 2019_1, 3.66
// 5년 평균: 불 2.64, 합 3.43, 경쟁률 1.16


function find_rank (score, list) {
list.push(score); //학점 리스트에 지원자 점수 삽입
list.sort().reverse(); //내림차순으로 만들고
return (list.indexOf(score)+1) //지원자의 등수 출력
}

function avg (list) { //평균 구해주는 함수
    let sum=0;
    for (let i=0; i<list.length; i++){ //합
        sum=sum+list[i]
    }
    let result= sum/list.length //합/변량개수
    return result
}

function say_last (score, average) {//평균과 지원자의 학점을 비교해서 마지막 말을 완성해주는 함수
    if (score>average) {
        return '보다 높음'
    }
    else if (score===average) {
        return '보다 낮음'
    }
    else {return '와 같음'}
}
