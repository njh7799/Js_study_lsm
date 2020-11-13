// EventTarget은 이벤트를 받을 수 있고 이벤트에 대한 수신기(listner)를 가질 수 있는 객체가 구현하는 DOM 인터페이스
// ex. Element, document, window가 가장 흔한 이벤트 대상.

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
})

// EventTarget은 addEventListner() 메서드는 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정한다.
// 일반적인 대상은 Element, Document, Window 가 있다.

// DOMContentloaded: 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생한다.
// 스타일 시트, 이미지, 하위 프라임의 로딩은 기다리지 않는다.
// 위 예제에서는 DOMContentLoaded 되면(지정한 이벤트가 대상에 전달되면)
// 오른쪽의 함수가 실행된다.

target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only

// type: 반응할 이벤트 유형을 나타내는 대소문자 구분 문자열
//listner: 지정된 타입의 이벤트가 발생했을 때 알림을 받는 객체. EventListner 인터페이스 또는 JavaScript function 구현 객체

