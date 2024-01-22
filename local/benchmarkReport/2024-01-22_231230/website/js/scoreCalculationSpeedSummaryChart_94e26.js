
var chart_scoreCalculationSpeedSummaryChart_94e26 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_94e26'), {
    type: 'line',
    data: {
        labels: [
            25
        ],
        datasets: [
            {
                  label: 'Tabu search (favorite)',
                    borderWidth: 4
,
                  data: [
                    546444
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    582941
                  ]
                }, 
{
                  label: 'Late acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    493454
                  ]
                }, 
{
                  label: 'Simulated Annealing (favorite)',
                    borderWidth: 4
,
                  data: [
                    497369
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
                text: 'Score calculation speed summary (higher is better)'
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
                        stepSize: 0.1
                        
                },
                suggestedMin: 0,
                suggestedMax: 25,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_scoreCalculationSpeedSummaryChart_94e26.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_94e26.resize();
});
