document.addEventListener('DOMContentLoaded', function() {
  start();
} )

function start () {
  const selectElement = document.querySelector('#major');
    selectElement.addEventListener('change', (event) => {
      const result = document.querySelector('.result');
      result.textContent = `${event.target.value} 정보입니다.`;
    });
  }
