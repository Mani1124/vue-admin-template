<template>
    <v-app-bar app elevation="1">
        <v-app-bar-nav-icon @click="$store.dispatch('setDrawer',!$store.state.drawer)"></v-app-bar-nav-icon>
        <p style="margin-bottom: 0px" class="text-h6">
          {{ $t($route.meta.name) }}
        </p>
        <v-spacer/>
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            offset-x
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-palette</v-icon>
                </v-btn>
            </template>
            <v-list style="padding: 0px">
                <v-list-item
                    style="padding: 0px"
                    link
                    @click="setColor(color)"
                    v-for="(color, index) in colors"
                    :key="index"
                >
                    <div style="position: relative;width: 200px;height: 80px">
                        <div style="position: absolute;top:25px;left: 80px;">
                            <v-icon style="color:white" x-large v-if="color.id===$store.state.color.id">mdi-check</v-icon>
                        </div>
                        <div :key="property" v-for="(item,property) in color" style="display: inline-block;">
                            <div v-if="property!=='id'" style="width: 50px;height: 80px" :style="{backgroundColor:item}"></div>
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn icon @click="toggleTheme" >
            <template v-if="$store.state.dark">
                <v-icon>mdi-white-balance-sunny</v-icon>
            </template>
            <template v-else>
                <v-icon>mdi-weather-night</v-icon>
            </template>
        </v-btn>
        <v-btn icon @click="toggleRTL" >
        <template v-if="$store.state.rtl">
          <v-icon>mdi-format-textdirection-l-to-r</v-icon>
        </template>
        <template v-else>
          <v-icon>mdi-format-textdirection-r-to-l</v-icon>
        </template>
      </v-btn>
      <div style="width: 120px">
        <v-select
            class="mt-5"
            :items="languages"
            item-text="name"
            item-value="id"
            @change="changeLanguage"
            dense
            :value="$store.state.language"
        ></v-select>
      </div>

      <v-menu
          v-model="accountMenu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
              icon
          >
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list dense>
            <v-list-item>
              <v-list-item-avatar size="70" style="margin: 0 auto">
                <v-icon size="60">
                  mdi-account-circle
                </v-icon>
              </v-list-item-avatar>
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
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item  v-for="(item,index) in accountMenuItems" :key="index" v-bind:style= "[item.route===$store.state.active_nav ? {'background':$vuetify.theme.themes[$store.state.dark ? 'dark' : 'light'].primary,'color':'white'} : {}]" link @click="navigate(item)">
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
          </v-list>

        </v-card>
      </v-menu>
    </v-app-bar>
</template>
<script>
import themeColors from "../../configs/themeColors";
import languagesSupported from "../../configs/languagesSupported";
import avatarMenu from "../../configs/avatarMenu";
    export default {
        name:'app-bar',
        data(){
            return{
                menu:false,
                fav: true,
                accountMenu: false,
                message: false,
                hints: true,
            }
        },
        computed:{
          colors(){
            return themeColors;
          },
          languages(){
            return languagesSupported
          },
          accountMenuItems(){
            return avatarMenu;
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
          toggleRTL(){
            this.$store.dispatch('toggleRTL',!this.$store.state.rtl);
            this.$vuetify.rtl = !this.$vuetify.rtl
          },
          changeLanguage(value){
            this.$store.dispatch('setLanguage',value);
            this.$vuetify.lang.current = value;
          },
          toggleTheme(){
              this.$store.dispatch('toggleTheme',!this.$store.state.dark);
              this.$vuetify.theme.dark = !this.$vuetify.theme.dark
          },
          setColor(color){
              this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].primary=color.primary;
              this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].secondary=color.secondary;
              this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].accent=color.accent;
              this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].info=color.info;
              this.$store.dispatch('setColor',color);
          }
        }
    }
</script>
