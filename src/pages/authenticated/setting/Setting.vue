<template>
<v-container fluid>
  <v-row>
    <v-col cols="12" class="pb-0 pt-0">
      <breadcrumb :items="breadcrumbItems"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="4" lg="3">
      <v-card flat>
        <v-card-text class="text-center">
          <v-list dense>
            <v-list-item>
              <div style="position:relative;margin: 0 auto">
                <v-list-item-avatar size="130" style="margin: 0 auto">
                  <v-icon size="120">
                    mdi-account-circle
                  </v-icon>
                </v-list-item-avatar>
                <v-btn
                    style="position: absolute;bottom: 10px;right: 10px"
                    fab
                    dark
                    small
                    color="primary"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </div>


            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text-center">
                  {{$store.state.user.name}}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-2 text-center">  {{$store.state.user.email}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-tabs  :centered="false"  :vertical="true">
          <v-tab :to="{'name':item.route}" v-for="item in menu" :key="item.title">
            <v-icon>{{item.icon}}</v-icon>
            {{$t(item.title)}}
          </v-tab>
        </v-tabs>
      </v-card>
    </v-col>
    <v-col cols="12" md="8" lg="9">
      <v-card
          style="position: relative"
          class="mx-auto mb-2"
      >
        <v-img
            height="250"
            src="https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?w=1200&ssl=1"
        ></v-img>
        <v-btn
            style="position: absolute;right: 0px;top: 0px"
            class="ma-2"
            outlined
            color="indigo"
        >
         Change Cover Picture
        </v-btn>
      </v-card>
        <router-view name="setting"></router-view>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import settingMenu from "../../../configs/settingMenu";
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
},
  computed:{
    menu(){
      return settingMenu;
    }
  }
}
</script>