
var chart_winningScoreDifferenceSummaryChart0_2a107 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart0_2a107'), {
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
                    0
                  ]
                }, 
{
                  label: 'Hill climbing (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0
                  ]
                }, 
{
                  label: 'Late acceptance',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -900
                  ]
                }, 
{
                  label: 'Simulated Annealing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -300
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
                text: 'Winning hard score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning hard score difference'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_winningScoreDifferenceSummaryChart0_2a107.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart0_2a107.resize();
});