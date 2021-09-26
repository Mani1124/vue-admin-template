<template>
  <v-card>
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