const revenueCountry={
    series: [{
        data: [21, 22, 10, 28, 16]
    }],
    chartOptions: {
        chartTitle: {
            text: 'Revenue V Country',
        },
        chart: {
            toolbar: {
                show: false,
            },
            height: 350,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: ["#880E4F","#FF5722","#2962FF","#00C853","#607D8B"],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        tooltip: {
            theme:true,
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return "INR (lakhs)"
                        }
                    }
                },
            ]
        },
        xaxis: {
            categories: [
                ['India'],
                ['US'],
                ['Australia'],
                ['South Africa'],
                ['Thailand'],
            ],
            labels: {
                style: {
                    colors:  ["#880E4F","#FF5722","#2962FF","#00C853","#607D8B"],
                    fontSize: '12px'
                }
            }
        }
    },
}
export default revenueCountry