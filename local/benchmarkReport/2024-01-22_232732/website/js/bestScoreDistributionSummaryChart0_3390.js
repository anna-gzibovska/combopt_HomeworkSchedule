
var chart_bestScoreDistributionSummaryChart0_3390 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_3390'), {
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
                                    min: -58,
                                    max: -58,
                                    q1: -58,
                                    q3: -58,
                                    median: -58,
                                    mean: -58,
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
                                    min: -49,
                                    max: -49,
                                    q1: -49,
                                    q3: -49,
                                    median: -49,
                                    mean: -49,
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
                                    min: -209,
                                    max: -209,
                                    q1: -209,
                                    q3: -209,
                                    median: -209,
                                    mean: -209,
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
                                    min: -119,
                                    max: -119,
                                    q1: -119,
                                    q3: -119,
                                    median: -119,
                                    mean: -119,
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
                text: 'Best hard score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
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
  chart_bestScoreDistributionSummaryChart0_3390.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_3390.resize();
});