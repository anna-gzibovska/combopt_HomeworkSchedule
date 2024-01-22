
var chart_bestScoreDistributionSummaryChart0_481de = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_481de'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample100'
        ],
        datasets: [
                {
                    label: 'Tabu search (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -4,
                                    max: -4,
                                    q1: -4,
                                    q3: -4,
                                    median: -4,
                                    mean: -4,
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
                                    min: -4,
                                    max: -4,
                                    q1: -4,
                                    q3: -4,
                                    median: -4,
                                    mean: -4,
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
                                    min: -31,
                                    max: -31,
                                    q1: -31,
                                    q3: -31,
                                    median: -31,
                                    mean: -31,
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
                                    min: -10,
                                    max: -10,
                                    q1: -10,
                                    q3: -10,
                                    median: -10,
                                    mean: -10,
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
  chart_bestScoreDistributionSummaryChart0_481de.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_481de.resize();
});