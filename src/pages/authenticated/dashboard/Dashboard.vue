<template>
    <v-container fluid v-if="chartFixed">
        <v-row>
            <v-col lg="3" md="3" cols="12" v-for="(chart,index) in charts" :key="index">
                <line-chart :icon="chart.icon" :currency="chart.currency" :value="chart.value" :chartTitle="chart.title" :type="chart.chartOptions.chart.type" :data="chart" :color="chart.background"/>
            </v-col>
        </v-row>
      <v-row>
        <v-col  lg="6" md="6" cols="12">
          <multiline-chart  :type="multilineChartData.chartOptions.chart.type" :data="multilineChartData" />
        </v-col>
        <v-col lg="6" md="6" cols="12">
          <pie-chart  :type="pieChartData.chartOptions.chart.type" :data="pieChartData"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" md="6" cols="12">
          <pie-chart  :type="revenueChartData.chartOptions.chart.type" :data="revenueChartData"/>
        </v-col>
        <v-col lg="6" md="6" cols="12">
          <pie-chart  :type="countryChartData.chartOptions.chart.type" :data="countryChartData"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col  lg="6" md="6" cols="12">
          <guest-table  :guests="topGuest" tableTitle="Top Guests" />
        </v-col>
        <v-col  lg="6" md="6" cols="12">
          <guest-table  :guests="topGuest" tableTitle="VIP Guests" />
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import Chart from "./../../../components/chart/linechart/LineChart";
import MultilineChart from "../../../components/chart/linechart/MultilineChart";
import PieChart from "../../../components/chart/linechart/PieChart";
import GuestTable from "./components/GuestTable";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
    export default {
      components:{
        'breadcrumb':Breadcrumb,
        'guest-table':GuestTable,
        'line-chart':Chart,
        'pie-chart':PieChart,
        'multiline-chart':MultilineChart
      },
        data(){
            return {
                chartFixed:false,
                multilineChartData:{
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
                        show: true,
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
                    title: {
                      text: 'Actual Revenue V Expected Revenue',
                      align: 'left'
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
                },
                pieChartData:{
                  series: [44, 55, 13, 43, 22],
                  chartOptions: {
                    chart: {
                      height: 350,
                      type: 'pie',
                    },
                    colors:["#0f7e02","#04277c","#7e023a","#8f8917","#7b0a83"],
                    title: {
                      text: 'Revenue V Room Type',
                      align: 'left'
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

                },
                revenueChartData:{
                  series: [23, 21, 7, 34, 22],
                  chartOptions: {
                  chart: {
                    height: 350,
                    type: 'donut',
                  },
                  colors:["#a29f04","#d20423","#06ad7a","#ce2405","#b800c4"],
                  title: {
                    text: 'Revenue V OTA',
                    align: 'left'
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
                },
                countryChartData:{
                  series: [{
                    data:  [12, 23, 22, 11, 17]
                  }],
                  chartOptions: {

                    colors:["#06ad7a"],
                    title: {
                      text: 'Revenue V OTA',
                      align: 'left'
                    },
                    chart: {
                      toolbar: {
                        show: false,
                      },
                      type: 'bar',
                      height: 350
                    },
                    plotOptions: {
                      bar: {
                        horizontal: true,
                      }
                    },
                    dataLabels: {
                      enabled: true
                    },
                    xaxis: {
                      categories: ['India', 'Germany', 'US', 'UK', 'Australia'],
                      labels: {
                        show: false,
                      },
                    },
                    grid: {
                      show: false
                    },
                    yaxis: {
                      reversed: true,
                      axisTicks: {
                        show: false
                      }
                    },
                    tooltip: {
                      y: [
                        {
                          title: {
                            formatter: function (val) {
                              return "Revenue:"
                            }
                          }
                        }
                      ]
                    }
                  },
                },
                topGuest:[
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},
                  {name:"John Doe",mobile:"+91 9000000000",email:"johndoe@domain.com",country:"India"},


                ],

            }
        },
        computed:{
          charts(){
            return [
              {
                icon:'mdi-sigma',
                title:"Bookings",
                value:"556",
                currency:null,
                background: this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].primary,
                series: [{
                  name: "Total bookings",
                  labels: {
                    show: false,
                  },
                  data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
                },
              },
              {
                icon:'mdi-currency-usd',
                title:"Revenue",
                value:"1141 Lakhs",
                currency:"INR",
                background: this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].secondary,
                series: [{
                  name: "Total revenue in lakhs",
                  labels: {
                    show: false,
                  },
                  data: [20, 45, 35, 96, 36, 140, 121, 91, 148]
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
                },
              },
              {
                icon:'mdi-account-circle',
                title:"New Guests",
                value:"3566",
                currency:null,
                background: this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].accent,
                series: [{
                  name: "Total users",
                  labels: {
                    show: false,
                  },
                  data: [120, 168, 96, 142, 127, 420, 600, 870, 1023]
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
                },
              },
              {
                icon:'mdi-bed',
                title:"Occupancy",
                value:"86%",
                currency:null,
                background: this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].info,
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
          }
        },
        methods:{

        },
      mounted() {
        this.chartFixed=true
      }
    }
</script>
