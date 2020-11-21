document.addEventListener('DOMContentLoaded', function (){
    do_everything();
})
function setData(list) { //학점 Array를 받아서 Chart안에 들어갈 dataset을 반환 
        let data_set=[];
        for (let i=0; i<list.length; i++){
            data_set.push({x:i, y:list[i]})
        }
        return data_set
    }
function do_everything () { //todo: 이것 꼭 바꾸기! 
    let ctx = document.getElementById('mybarChart');
    let ctx2 =document.getElementById('myscatterChart');
    let barChart=new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['합격자 평균', '불합격자 평균'],
            datasets:[{
                label: '학점',
                data:[3.43, 2.64],
                backgroundColor:[ //바의 배경색
                'rgba(55, 62, 251, 0.5)',
                'rgba(250, 30, 30, 0.5)'
                ],
                borderColor:[ //바의 테두리색
                'rgba(55, 62, 251, 1)',
                'rgba(250, 30, 30, 1)'
                ],
                borderWidth:1,
                barPercentage:0.9,
                barThickness:50
            }],
        },
        options: {responsive:false,
        title:{text:'합격자와 불합격자의 평균 학점',display:true},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min:0,
                    max:4.5,
                    stepSize:0.1
                }
            }]
        },
        
    }
    })

    let lineChart = new Chart(ctx2, { //선 그래프
        type:'line',
    data: {
        datasets: [{
            label: '합격자 학점',
            data: setData([3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66]), //합격자의 점수대를 집어넣음
            borderColor:'rgba(55, 62, 251, 1)', //파랑
            pointBorderWidth:6, //포인트지점의 크기: 픽셀임
            pointStyle:'circle',
            backgroundColor:'rgba(0, 0, 0, 0)', //투명으로 설정
        },
        {
            label:'불합격자 학점',
            data: setData([1.59, 2.39, 2.64, 3.11, 3.45]), //불합격자의 점수를 집어넣음
            borderColor:'rgba(250, 30, 30, 1)',
            pointRadius:6, //점의 크기
            pointStyle:'crossRot', //십자 모양
            backgroundColor:'rgba(0, 0, 0, 0)',
        }
    ]
    },
    options: {responsive:false,
        title:{text:'합격자와 불합격자의 학점 분포',
    display:true},
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
}