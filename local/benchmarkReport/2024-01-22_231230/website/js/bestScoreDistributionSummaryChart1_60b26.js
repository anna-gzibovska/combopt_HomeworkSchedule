
var chart_bestScoreDistributionSummaryChart1_60b26 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_60b26'), {
    type: 'boxplot',
    data: {
        labels: [
            'classExample5'
        ],
        datasets: [
                {
                    label: 'Tabu search (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: 47,
                                    max: 47,
                                    q1: 47,
                                    q3: 47,
                                    median: 47,
                                    mean: 47,
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
                                    min: 47,
                                    max: 47,
                                    q1: 47,
                                    q3: 47,
                                    median: 47,
                                    mean: 47,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late acceptance (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: 47,
                                    max: 47,
                                    q1: 47,
                                    q3: 47,
                                    median: 47,
                                    mean: 47,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Simulated Annealing (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: 47,
                                    max: 47,
                                    q1: 47,
                                    q3: 47,
                                    median: 47,
                                    mean: 47,
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
  chart_bestScoreDistributionSummaryChart1_60b26.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_60b26.resize();
});