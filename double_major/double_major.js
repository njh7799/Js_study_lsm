document.addEventListener('DOMContentLoaded',
select_major()
)

function select_major(){
let maj=document.getElementById('major');
let major=maj.options[maj.selectedIndex].value;
getElementById('selectedmajor').innerText=major
}
