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
          <bar-chart  :type="countryChartData.chartOptions.chart.type" :data="countryChartData"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col  lg="6" md="6" cols="12">
          <guest-table  :guests="guests" tableTitle="Top Guests" />
        </v-col>
        <v-col  lg="6" md="6" cols="12">
          <guest-table  :guests="guests" tableTitle="VIP Guests" />
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import Chart from "./../../../components/chart/LineChart";
import MultilineChart from "../../../components/chart/MultilineChart";
import PieChart from "../../../components/chart/PieChart";
import GuestTable from "./components/GuestTable";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import BarChart from "../../../components/chart/BarChart";
import expectedRevenue from "../../../data/expectedRevenue";
import revenueRoom from "../../../data/revenueRoom";
import revenueOta from "../../../data/revenueOta";
import revenueCountry from "../../../data/revenueCountry";
import guest from "../../../data/guest";
import DashboardData from "../../../data/dashboardData";
    export default {
        components:{
          'breadcrumb':Breadcrumb,
          'guest-table':GuestTable,
          'line-chart':Chart,
          'pie-chart':PieChart,
          'multiline-chart':MultilineChart,
          'bar-chart':BarChart
        },
        data(){
            return {
                chartFixed:false,
            }

        },
        computed:{
          charts(){
            DashboardData[0].background=this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].primary;
            DashboardData[1].background=this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].secondary;
            DashboardData[2].background=this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].accent;
            DashboardData[3].background=this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].info;
            return DashboardData;
          },
          multilineChartData(){
            return expectedRevenue;
          },
          pieChartData(){
            return revenueRoom;
          },
          revenueChartData(){
            return revenueOta;
          },
          countryChartData(){
            return revenueCountry;
          },
          guests(){
            return guest;
          }
        },
        methods:{

        },
      mounted() {
        this.chartFixed=true
      },
      watch:{
        '$vuetify.rtl': function (value) {
          this.remount+=1;
        }
      }
    }
</script>
