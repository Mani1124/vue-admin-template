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
    <apexchart :key="remount"  :type="type" :height="data.chartOptions.chart.height" :options="category" :series="series"></apexchart>
  </v-card>
</template>
<script>
export default {
  name:'multiline-chart',
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
    series(){
      if(this.$vuetify.rtl){
        let localSeries=JSON.parse(JSON.stringify(this.data.series));
        localSeries[0].data.reverse();
        return localSeries;

      }else{
        return this.data.series
      }
    },
    category(){
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