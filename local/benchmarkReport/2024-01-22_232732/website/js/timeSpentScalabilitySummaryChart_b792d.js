
var chart_timeSpentScalabilitySummaryChart_b792d = new Chart(document.getElementById('chart_timeSpentScalabilitySummaryChart_b792d'), {
    type: 'line',
    data: {
        labels: [
            250000
        ],
        datasets: [
            {
                  label: 'Tabu search',
                    borderWidth: 1
                  ,
                  data: [
                    20000
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                    borderWidth: 4
,
                  data: [
                    20000
                  ]
                }, 
{
                  label: 'Late acceptance',
                    borderWidth: 1
                  ,
                  data: [
                    20000
                  ]
                }, 
{
                  label: 'Simulated Annealing',
                    borderWidth: 1
                  ,
                  data: [
                    20013
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
                text: 'Time spent scalability summary (lower is better)'
            },
            tooltip: {
                callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            return label + ": " + humanizeTime(context.parsed.y);
                        }
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
                        stepSize: 1000
                        
                },
                suggestedMin: 0,
                suggestedMax: 250000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
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
  chart_timeSpentScalabilitySummaryChart_b792d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentScalabilitySummaryChart_b792d.resize();
});
