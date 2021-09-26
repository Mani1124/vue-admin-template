<template>
  <v-data-table
      :headers="headers"
      :items="guests"
      :sort-by="['Name']"
      :sort-desc="[false]"
      class="elevation-2"
  >
    <template
        v-slot:top
    >
      <div class="pl-3 pt-3">
        <p class="text-body-2 font-weight-bold">{{tableTitle}}</p>
      </div>

    </template>
  </v-data-table>
</template>
<script>
export default {
  name:'guest-table',
  props:{
    tableTitle:{
      type:String,
      require: true
    },
    guests:{
      type:Array,
      require:true
    }
  },
  data(){
    return{
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Phone', value: 'mobile' },
        { text: 'Email', value: 'email' },
        { text: 'Country', value: 'country' },
      ],
    }
  }
}
</script>