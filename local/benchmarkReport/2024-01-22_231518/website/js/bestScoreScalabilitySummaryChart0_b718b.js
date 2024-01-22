
var chart_bestScoreScalabilitySummaryChart0_b718b = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_b718b'), {
    type: 'line',
    data: {
        labels: [
            2500
        ],
        datasets: [
            {
                  label: 'Tabu search (favorite)',
                    borderWidth: 4
,
                  data: [
                    -3
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    -3
                  ]
                }, 
{
                  label: 'Late acceptance',
                    borderWidth: 1
                  ,
                  data: [
                    -12
                  ]
                }, 
{
                  label: 'Simulated Annealing',
                    borderWidth: 1
                  ,
                  data: [
                    -6
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
                text: 'Best hard score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 10
                        
                },
                suggestedMin: 0,
                suggestedMax: 2500,
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
  chart_bestScoreScalabilitySummaryChart0_b718b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_b718b.resize();
});
