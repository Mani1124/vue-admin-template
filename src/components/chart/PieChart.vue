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