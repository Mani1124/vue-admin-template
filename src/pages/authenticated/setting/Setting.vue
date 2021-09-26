<template>
<v-container fluid>
  <v-row>
    <v-col cols="12" class="pb-0 pt-0">
      <breadcrumb :items="breadcrumbItems"/>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

export default {
  components:{
    'breadcrumb':Breadcrumb,
  },
data(){
  return{
    breadcrumbItems:[
      {
        text: 'Home',
        disabled: false,
        exact: true,
        to: {name:'Dashboard'},
      },
      {
        text: 'Setting',
        disabled: true,
        exact: true,
        to: {name:'Settings'},
      },
    ]
  }
}
}
</script>