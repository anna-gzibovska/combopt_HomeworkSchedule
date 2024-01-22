
var chart_bestScoreDistributionSummaryChart1_dc1cd = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_dc1cd'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample500'
        ],
        datasets: [
                {
                    label: 'Tabu search',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: 3236,
                                    max: 3236,
                                    q1: 3236,
                                    q3: 3236,
                                    median: 3236,
                                    mean: 3236,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Hill climbing (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: 3236,
                                    max: 3236,
                                    q1: 3236,
                                    q3: 3236,
                                    median: 3236,
                                    mean: 3236,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late acceptance',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: 3236,
                                    max: 3236,
                                    q1: 3236,
                                    q3: 3236,
                                    median: 3236,
                                    mean: 3236,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: 3236,
                                    max: 3236,
                                    q1: 3236,
                                    q3: 3236,
                                    median: 3236,
                                    mean: 3236,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
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
  chart_bestScoreDistributionSummaryChart1_dc1cd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_dc1cd.resize();
});