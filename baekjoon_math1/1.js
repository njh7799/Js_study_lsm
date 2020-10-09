//손익분기점 즉 최초로 이익이 발생하는 판매량을 출력한다. 손익분기점이 존재하지 않으면 -1을 출력한다.
let a=1000; let b=70; let c=170;

function sonik (a,b,c){
    let i=1;
        return -1
    }
    while (a>=(c-b)*i){ //판매가-원가의 곱이 고정비용보다 커져야한다.
        i++
    }
    return i
}

console.log(sonik(1000,70,170))
