let DashboardData= [
    {
        icon:'mdi-sigma',
        title:"Bookings",
        value:"556",
        currency:null,
        background: "",
        series: [{
            name: "Total bookings",
            labels: {
                show: false,
            },
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chartOptions: {
            tooltip: {
                theme:true
            },
            colors:["#fff"],
            chart: {
                width: '100%',
                toolbar: {
                    show: false
                },
                height: 100,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21'],
            },
            yaxis: {
                show: false,
            },
        },
    },
    {
        icon:'mdi-currency-usd',
        title:"Revenue",
        value:"1141 Lakhs",
        currency:"INR",
        background: "",
        series: [{
            name: "Total revenue in lakhs",
            labels: {
                show: false,
            },
            data: [20, 45, 35, 96, 36, 140, 121, 91, 148]
        }],
        chartOptions: {
            tooltip: {
                theme:true
            },
                colors:["#fff"],
            chart: {
                width: '100%',
                toolbar: {
                    show: false
                },
                height: 100,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21'],
            },
            yaxis: {
                show: false,
            },
        },
    },
    {
        icon:'mdi-account-circle',
        title:"New Guests",
        value:"3566",
        currency:null,
        background: "",
        series: [{
            name: "Total users",
            labels: {
                show: false,
            },
            data: [120, 168, 96, 142, 127, 420, 600, 870, 1023]
        }],
        chartOptions: {
            tooltip: {
                theme:true
            },
            colors:["#fff"],
            chart: {
                width: '100%',
                toolbar: {
                    show: false
                },
                height: 100,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21'],
            },
            yaxis: {
                show: false,
            },
        },
    },
    {
        icon:'mdi-bed',
        title:"Occupancy",
        value:"86%",
        currency:null,
        background: "",
        series: [{
            name: "Room occupancy",
            labels: {
                show: false,
            },
            data: [85, 65, 85, 36, 45, 96, 100, 75, 86]
        }],
        chartOptions: {
            colors:["#fff"],
            chart: {
                width: '100%',
                toolbar: {
                    show: false
                },
                height: 100,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21'],
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                theme:true,
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val+" percent"
                            }
                        }
                    }
                ]
            }
        },
    }
]
export default DashboardData