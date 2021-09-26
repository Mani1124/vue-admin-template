<template>
  <v-card :color="color" elevation="10">
    <div class="pl-3 pt-3">
      <div style="width: 100%;position: relative">
        <v-btn
            style="position: absolute;top: 0;right: 0"
            icon
            color="white"
        >
          <v-icon>mdi-cached</v-icon>
        </v-btn>
          <div style="display: inline-block;vertical-align:top;" >
            <v-icon class="white--text" style="font-size: 50px">{{icon}}</v-icon>
          </div>
        <div style="display: inline-block;" class="pl-2">
          <p class="ma-0 pa-0 text-h5 white--text">{{currency}} {{value}}</p>
          <p class="ma-0 pa-0 text-caption white--text">{{chartTitle}}</p>
        </div>
      </div>
    </div>
    <apexchart :type="type" :height="data.chartOptions.chart.height" :options="data.chartOptions" :series="data.series"></apexchart>
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
    }

  }
}
</script>