<template>
  <v-card :color="color" elevation="10">
    <div class="pl-3 pt-3">
      <div style="width: 100%;position: relative">
          <template v-if="$vuetify.rtl">
            <v-btn
                style="position: absolute;top: 0;left: 0"
                icon
                color="white"
            >
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </template>
          <template v-else>
            <v-btn
                style="position: absolute;top: 0;right: 0"
                icon
                color="white"
            >
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </template>
          <div style="display: inline-block;vertical-align:top;" >
            <v-icon class="white--text" style="font-size: 55px">{{icon}}</v-icon>
          </div>
          <div style="display: inline-block;" class="pl-2">
            <p class="ma-0 pa-0 text-h6 white--text">{{currency}} {{value}}</p>
            <p class="ma-0 pa-0 text-caption white--text">{{$t(chartTitle)}}</p>
          </div>
      </div>
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