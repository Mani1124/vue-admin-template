<template>
  <v-card :color="color" elevation="10">
    <div class="pl-3 pt-3">
      <v-card-title class="pa-0">
        <div>
          <div style="display: inline-block;vertical-align:top;" >
            <v-icon class="white--text" style="font-size: 55px">{{icon}}</v-icon>
          </div>
          <div style="display: inline-block;" class="pl-2">
            <p class="ma-0 pa-0 text-h6 white--text"><strong>{{currency}} {{value}}</strong></p>
            <p class="ma-0 pa-0 text-caption white--text">{{$t(chartTitle)}}</p>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn
            icon
        >
          <v-icon color="white">mdi-cached</v-icon>
        </v-btn>
      </v-card-title>
    </div>
    <apexchart :key="remount"  :type="type" :height="data.chartOptions.chart.height" :options="option" :series="series"></apexchart>
  </v-card>
</template>
<script>
export default {
  name:'line-chart',
  props:{
    icon:{
      type:String,
    },
    currency:{
      type:String,
      default:null,
    },
    value:{
      type:String,
      require:true,
    },
    chartTitle:{
      require:true,
      type:String
    },
    type: {
      require:true,
      type: String
    },
    color:{
      require:true,
      type:String,
      default:'#fff'
    },
    data:{
      require:true,
      type:Object
    },
  },
  data(){
    return{
        remount:0
    }
  },
  mounted() {
  },
  computed:{
    series(){
      if(this.$vuetify.rtl){
        let localSeries=JSON.parse(JSON.stringify(this.data.series));
         localSeries[0].data.reverse();
        return localSeries;

      }else{
        return this.data.series
      }
    },
    option(){
      if(this.$vuetify.rtl){
        let localChartOption=JSON.parse(JSON.stringify(this.data.chartOptions));
         localChartOption.xaxis.categories.reverse();
        return localChartOption;
      }else{
        return this.data.chartOptions;
      }
    }
  },
  watch:{
    '$vuetify.rtl': function (value) {
      this.remount+=1;
    }
  }
}
</script>