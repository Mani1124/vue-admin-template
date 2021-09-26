<template>
    <v-navigation-drawer
        :value="$store.state.drawer"
        app
    >
        <v-list dense>
            <v-list-item>
                <v-list-item-avatar size="70" style="margin: 0 auto">
                    <v-icon size="100">
                        mdi-account-circle
                    </v-icon>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        {{$store.state.user.name}}
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-2">  {{$store.state.user.email}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dense>
            <template v-for="item in items">
                <template v-if="item.children.length===0">
                    <v-list-item v-bind:style= "[item.route===$store.state.active_nav ? {'background':$vuetify.theme.themes[$store.state.dark ? 'dark' : 'light'].primary,'color':'white'} : {}]" link @click="navigate(item)">
                        <v-list-item-icon>
                            <v-icon  v-bind:style= "[item.route===$store.state.active_nav ? {'color':'white'} : {}]">{{item.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>{{item.title}}</v-list-item-title>
                      <v-list-item-action v-if="item.external">
                        <v-icon
                            size="18"
                        >
                          mdi-arrow-top-right
                        </v-icon>
                      </v-list-item-action>
                    </v-list-item>
                </template>
                <template v-else>
                    <v-list-group
                        class="sub-group"
                        :prepend-icon="item.icon"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{item.title}}</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-bind:style= "[child.route===$store.state.active_nav ? {'background':$vuetify.theme.themes[$store.state.dark ? 'dark' : 'light'].primary,'color':'white'} : {}]"
                            v-for="(child,index) in item.children"
                            :key="index"
                            link
                            @click="navigate(child)"
                        >
                            <v-list-item-icon>
                                <v-icon v-bind:style= "[child.route===$store.state.active_nav ? {'color':'white'} : {}]">{{child.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                          <v-list-item-action v-if="child.external">
                            <v-icon
                                size="18"
                            >
                              mdi-arrow-top-right
                            </v-icon>
                          </v-list-item-action>

                        </v-list-item>
                    </v-list-group>
                </template>
            </template>
        </v-list>

    </v-navigation-drawer>
</template>
<script>
    export default {
        name:'drawer',
        data(){
            return{
                items: [
                    {
                        icon: 'mdi-view-dashboard',
                        children: [],
                        title: 'Dashboard',
                        route:'Dashboard',
                        external:false,
                        params:null,
                    },
                  {
                    icon: 'mdi-connection',
                    active: false,
                    children: [
                      {

                        title: 'Alert',
                        route:'https://vuetifyjs.com/en/components/alerts',
                        icon: 'mdi-alert',
                        external:true,
                        params:null,
                      },
                      {

                        title: 'Buttons',
                        route:'https://vuetifyjs.com/en/components/buttons/',
                        icon: 'mdi-gesture-tap-button',
                        external:true,
                        params:null,
                      },
                      {

                        title: 'Calendar',
                        route:'https://vuetifyjs.com/en/components/calendars/',
                        icon: 'mdi-calendar',
                        params:null,
                        external:true,
                      },
                      {

                        title: 'Drawer',
                        route:'https://vuetifyjs.com/en/components/navigation-drawers/',
                        icon: 'mdi-format-horizontal-align-center',
                        external:true,
                        params:null,
                      },

                      {

                        title: 'Cards',
                        route:'https://vuetifyjs.com/en/components/cards/',
                        icon: 'mdi-card-outline',
                        external:true,
                        params:null,
                      },
                      {

                        title: 'Grid System',
                        route:'https://vuetifyjs.com/en/components/grids',
                        icon: 'mdi-grid',
                        external:true,
                        params:null,
                      },
                      {

                        title: 'Date Picker',
                        route:'https://vuetifyjs.com/en/components/date-pickers/',
                        icon: 'mdi-calendar-range',
                        external:true,
                        params:null,
                      },
                      {
                        title: 'More Components',
                        route:'https://vuetifyjs.com',
                        icon: 'mdi-dots-horizontal',
                        external:true,
                        params:null,
                      },

                    ],
                    title: 'Vuetify Components',
                    external:false,
                    params:null,
                  },
                  {
                    icon: 'mdi-chart-bar',
                    children: [],
                    title: 'Apex Chart',
                    route:'https://apexcharts.com/vue-chart-demos/',
                    external:true,
                    params:null,
                  },
                  {
                    icon: 'mdi-text-box-multiple',
                    children: [
                      {

                        title: 'Registration',
                        route:'PageRegistration',
                        icon: 'mdi-account-plus',
                        params:{context:"page"},
                        external:false,
                      },
                      {

                        title: 'Sign In',
                        route:'PageSignIn',
                        icon: 'mdi-login',
                        params:{context:"page"},
                        external:false,
                      },
                      {

                        title: 'Forget Password',
                        route:'PageForgetPassword',
                        icon: 'mdi-lock',
                        params:{context:"page"},
                        external:false,
                      },
                      {

                        title: 'Recover Password',
                        route:'PageRecoverPassword',
                        icon: 'mdi-lock',
                        params:{context:"page"},
                        external:false,
                      },
                    ],
                    title: 'Pages',
                    route:'',
                    external:false,
                    params:null,
                  },
                ],
            }
        },
        methods:{
            navigate(item){
              if(item.external){
                window.open(item.route,'_blank')
              }else{

                if(item.params){
                  this.$router.push({name:item.route,params:item.params})
                }else{
                  this.$router.push({name:item.route})
                }
                this.$store.dispatch('setActiveNavigation',item.route);
              }

            },
        }
    }
</script>
