
var chart_bestScoreDistributionSummaryChart0_37c9f = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_37c9f'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample50'
        ],
        datasets: [
                {
                    label: 'Tabu search (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -3,
                                    max: -3,
                                    q1: -3,
                                    q3: -3,
                                    median: -3,
                                    mean: -3,
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
                                    min: -3,
                                    max: -3,
                                    q1: -3,
                                    q3: -3,
                                    median: -3,
                                    mean: -3,
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
                                    min: -12,
                                    max: -12,
                                    q1: -12,
                                    q3: -12,
                                    median: -12,
                                    mean: -12,
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
                                    min: -6,
                                    max: -6,
                                    q1: -6,
                                    q3: -6,
                                    median: -6,
                                    mean: -6,
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
  chart_bestScoreDistributionSummaryChart0_37c9f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_37c9f.resize();
});