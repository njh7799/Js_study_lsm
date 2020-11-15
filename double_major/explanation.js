// 아래 예제는 문서에서 "myclass"라는 클래스를 사용하는 첫 번째 요소를 반환합니다.
var el = document.querySelector(".myclass");

// 아래 예제처럼 정말 강력한 선택자도 사용할 수 있습니다. 
// 예제의 결과는 클래스가 "user-panel main"인 <div>(<div class="user-panel main">) 안의, 이름이 "login"인 <input> 중 첫 번째 요소입니다.
var el = document.querySelector("div.user-panel.main input[name=login]");