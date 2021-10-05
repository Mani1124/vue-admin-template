<template>
    <v-navigation-drawer
        :right="$vuetify.rtl"
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
import menus from "../../configs/menus";
    export default {
        name:'drawer',
        data(){
            return{

            }
        },
        computed:{
            items(){
              return menus;
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
