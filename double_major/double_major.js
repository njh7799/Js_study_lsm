document.addEventListener('DOMContentLoaded', function() {
  express_major();
  major_detail();
} )

function express_major () {
  const selectmajor = document.querySelector('#major_select');
    selectmajor.addEventListener('change', (event) => {
      const result = document.querySelector('.result');
      result.textContent = `${event.target.value} 정보입니다.`;
      //object Event, HTMLSelectElement
    });
  }

  function major_detail() {
    const selectmajor = document.querySelector('#major_select');
    selectmajor.addEventListener('change', (event) => {
      const result = document.querySelector('.result');
      result.textContent = `${event.target.value} 정보입니다.`;
      //object Event, HTMLSelectElement
    });
  }


  //학점과 희망학과를 입력 받아 지원 안정성을 평가해주는 기능
