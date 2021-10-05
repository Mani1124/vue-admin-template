<template>
  <v-card>
    <div class="ml-3 mt-3 mr-3" style="color: gray"><strong>{{data.chartOptions.chartTitle.text}}</strong></div>
    <apexchart :type="type" :height="data.chartOptions.chart.height" :options="data.chartOptions" :series="data.series"></apexchart>
  </v-card>
</template>
<script>
export default {
  name:'pie-chart',
  props:{
    type: {
      require:true,
      type: String
    },
    data:{
      require:true,
      type:Object
    }

  }
}
</script>