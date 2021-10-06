const expectedRevenue={
    background:'white',
    series: [{
        name: "Revenue",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
        {
            name: "Expected Revenue",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
    ],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                    customIcons: []
                },
                export: {
                    csv: {
                        filename: undefined,
                        columnDelimiter: ',',
                        headerCategory: 'category',
                        headerValue: 'value',
                        dateFormatter(timestamp) {
                            return new Date(timestamp).toDateString()
                        }
                    },
                    svg: {
                        filename: undefined,
                    },
                    png: {
                        filename: undefined,
                    }
                },
                autoSelected: 'zoom'
            },
            height: 350,
            type: 'line',
            zoom: {
                enabled: true,
                type: 'x',
                autoScaleYaxis: false,
                zoomedArea: {
                    fill: {
                        color: '#90CAF9',
                        opacity: 0.4
                    },
                    stroke: {
                        color: '#0D47A1',
                        opacity: 0.4,
                        width: 1
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'smooth',
            dashArray: [0, 8, 5]
        },
        colors:["#0f7e02","#8c8c8c"],
        chartTitle: {
            text: 'Actual Revenue V Expected Revenue',
        },
        legend: {
            tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21',
                'Oct-21', 'Nov-21', 'Dec-21'
            ],
        },
        tooltip: {
            theme:true,
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return "INR "+val + "(lakhs)"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return "INR "+val + "(lakhs)"
                        }
                    }
                },
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    },
}
export default expectedRevenue