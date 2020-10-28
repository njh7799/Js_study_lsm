//선언되지 않은 변수에 값 할당하는 등의 비상식적 실행을 막는다.
//strict mode 추천. 자바스크립트 엔진의 효율 향상된다.
'use strict';
let globalName='global name'
{
let name='sumin';
console.log(name);
}
console.log(name)

//pc에 node js 설치되어 있으면, 폴더 디렉토리 가서 node 파일명 해도 실행된다.

for (let i=0; i<=10; i++){
    if (i>8){
        break;
    }
    console.log(i)
}