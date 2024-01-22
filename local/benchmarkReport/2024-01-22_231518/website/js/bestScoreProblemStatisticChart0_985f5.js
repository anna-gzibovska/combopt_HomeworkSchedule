
var chart_bestScoreProblemStatisticChart0_985f5 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_985f5'), {
    type: 'line',
    data: {
        labels: [
            9, 11, 15, 17, 20, 24, 28, 29, 30, 31, 41, 51, 80, 88, 125, 155, 207, 214, 279, 353, 437, 445, 515, 588, 964, 1004, 1187, 1249, 2246, 3607, 13055, 18921, 19904, 19920, 19937, 19954, 19975, 19978, 19987, 20000, 20006
        ],
        datasets: [
            {
                  label: 'Tabu search (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , -16, , -15, -14, , -13, -12, , -11, , -10, -9, -8, -7, -6, -5, -4, , -3, , , , , , , , -3, 
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -16, , -14, -12, -11, -10, -9, -8, , -7, -6, , -5, , , -4, , , , , -3, , , , , , , , , , , , , , , , , -3, 
                  ]
                }, 
{
                  label: 'Late acceptance',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -16, -15, , , , , , , , , -14, , , , , , , , , , -13, , , , , , , , , , -12, , , , , , , , , , -12
                  ]
                }, 
{
                  label: 'Simulated Annealing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -16, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -15, -14, -10, -9, -8, -7, -6, -6, 
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'classExample50 best hard score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 20006,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 0.1
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart0_985f5.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_985f5.resize();
});
