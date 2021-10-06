<template>
  <v-card>
    <v-card-title>
      <strong>{{data.chartOptions.chartTitle.text}}</strong>
      <v-spacer></v-spacer>
      <v-btn
          icon
      >
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <apexchart :key="remount"   :type="type" :height="data.chartOptions.chart.height" :options="option" :series="data.series"></apexchart>
  </v-card>
</template>
<script>
export default {
  name:'bar-chart',
  props:{
    type: {
      require:true,
      type: String
    },
    data:{
      require:true,
      type:Object
    }
  },
  data(){
    return{
      remount:0
    }
  },
  computed:{
    option(){
      if(this.$vuetify.rtl){
        let localChartOption=JSON.parse(JSON.stringify(this.data.chartOptions));
        localChartOption.yaxis.reversed=true;
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