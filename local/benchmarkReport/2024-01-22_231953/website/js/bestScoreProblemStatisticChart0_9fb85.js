
var chart_bestScoreProblemStatisticChart0_9fb85 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_9fb85'), {
    type: 'line',
    data: {
        labels: [
            17, 19, 22, 26, 35, 37, 39, 40, 41, 42, 48, 54, 56, 57, 60, 62, 65, 72, 101, 134, 172, 176, 181, 202, 217, 228, 237, 261, 285, 304, 321, 340, 346, 357, 373, 391, 410, 424, 436, 447, 450, 472, 529, 542, 678, 779, 813, 819, 842, 1090, 1213, 1261, 1269, 1451, 1581, 3337, 3771, 4019, 4599, 8157, 19922, 19925, 19929, 19930, 19938, 19953, 19955, 19956, 19960, 19963, 19970, 19976, 19983, 19994, 19998, 20000, 20001
        ],
        datasets: [
            {
                  label: 'Tabu search (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , -35, , , , -34, , -33, -32, -31, -30, -29, -28, , -27, -26, -25, -24, -23, -22, , -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, , -8, -7, -6, -5, , -4, , , , , , , , , , , , , , , , -4, 
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , -35, -34, -33, -31, -30, -24, -20, -18, -17, -16, -15, -14, -13, -12, -11, -10, , -9, -8, , , -7, , , , , , , , , , , , , , -6, , , , , , , , , , , , , , -5, , , , , -4, , , , , , , , , , , , , , , , , -4, 
                  ]
                }, 
{
                  label: 'Late acceptance',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -35, -34, -33, , , , , , , , , , , , , , , , , , , , -32, , , , , , , , , -31, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -31
                  ]
                }, 
{
                  label: 'Simulated Annealing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -35, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -33, -32, -31, -29, -26, -22, -21, -20, -18, -17, -15, -13, -12, -11, -10, , -10
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
                text: 'classExample100 best hard score statistic'
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
                suggestedMax: 20001,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreProblemStatisticChart0_9fb85.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_9fb85.resize();
});
