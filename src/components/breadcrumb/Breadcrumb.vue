<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
          style="cursor: pointer"
          :style="{color:$vuetify.theme.themes[$store.state.dark ? 'dark' : 'light'].primary}"
          @click="$router.push(item.to)"
          :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  name:"breadcrumb",
  props:{
    items:{
      required:true,
      type:Array
    }
  },
  data(){
    return{

    }
  },
  mounted() {
    console.log("items",this.items)
  }
}
</script>