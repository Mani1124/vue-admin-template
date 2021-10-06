const revenueOta={
    series: [23, 21, 7, 34, 22],
    chartOptions: {
        tooltip:{
            theme:true,
        },
        chart: {
            height: 350,
            type: 'donut',
        },
        colors:["#a29f04","#d20423","#06ad7a","#ce2405","#b800c4"],
        chartTitle: {
            text: 'Revenue V OTA',
        },
        labels: ['MMT', 'Cleartrip', 'Yatra', 'Via', 'Paytm'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}
export default revenueOta;