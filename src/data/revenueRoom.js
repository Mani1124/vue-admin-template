const revenueRoom={
    series: [44, 55, 13, 43, 22],
    chartOptions: {
        tooltip:{
            theme:true,
        },
        chart: {
            height: 350,
            type: 'pie',
        },
        colors:["#0f7e02","#04277c","#7e023a","#8f8917","#7b0a83"],
        chartTitle: {
            text: 'Revenue V Room Types',
        },
        labels: ['Standard Room', 'Deluxe Room', 'Suite Room', 'Connecting Room', 'Apartment Room'],
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
    },

}
export default revenueRoom