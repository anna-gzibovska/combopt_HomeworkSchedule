
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_256b2 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_256b2'), {
    type: 'bar',
    data: {
        labels: [
            'classExample50'
        ],
        datasets: [
            {
                  label: 'Tabu search (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    29.36889567758897
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    31.869519878978362
                  ]
                }, 
{
                  label: 'Late acceptance',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    11.507336202211876
                  ]
                }, 
{
                  label: 'Simulated Annealing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_256b2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_256b2.resize();
});