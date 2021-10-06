<template>
    <v-app id="inspire">
        <v-dialog v-model="updateExists" persistent max-width="290">
            <v-card>
                <v-card-title class="headline" color="primary">Update available !</v-card-title>
                <v-card-text>
                    New app content available
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="refreshApp">Update Now</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-bottom-sheet persistent v-model="installable" inset>
            <v-card tile style="position: relative">
                <v-btn  style="position: absolute;right: 10px;top: 10px;z-index:100000;background-color:#BDBDBD" icon color="#BDBDBD" @click="installable=false">
                    <v-icon style="color:white">mdi-close</v-icon>
                </v-btn>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-btn icon>
                                <v-img style="height: 70px;width: 70px" src="/img/icons/ic_launcher.png"></v-img>
                            </v-btn>
                        </v-list-item-icon>
                        <v-list-item-content >
                            <v-list-item-title class="mt-3">{{title}}</v-list-item-title>
                            <v-list-item-subtitle>{{url}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn block @click="installNow" color="success" dark>Add to home Screen</v-btn>
                                </v-col>
                            </v-row>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-bottom-sheet>
        <vue-progress-bar />
    <router-view name="root"></router-view>
    </v-app>
</template>

<script>
    export default {
        data(){
            return{
                refreshing: false,
                registration: null,
                updateExists: false,
                installable:false,
                installer:null,
            }
        },
        created() {
            let color=this.$store.state.color
            this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].primary=color.primary;
            this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].secondary=color.secondary;
            this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].accent=color.accent;
            this.$vuetify.theme.themes[this.$store.state.dark ? 'dark' : 'light'].info=color.info;
            document.addEventListener(
                'swUpdated', this.showRefreshUI, { once: true }
            );
            navigator.serviceWorker.addEventListener(
                'controllerchange', () => {

                    navigator.serviceWorker.getRegistrations()
                        .then(function(registrations) {
                            for(let registration of registrations) {
                                registration.update();
                            }
                        });
                    if (this.refreshing) return;
                    this.refreshing = true;
                    window.location.reload();
                }
            );
            window.addEventListener("beforeinstallprompt", e => {
                e.preventDefault();
                this.installer = e;
                this.installable = true;
            });

        },
        methods:{
            showRefreshUI (e) {
                this.registration = e.detail;
                this.updateExists = true;
            },
            refreshApp () {
                this.updateExists = false;
                if (!this.registration || !this.registration.waiting) { return; }
                this.registration.waiting.postMessage('skipWaiting');
            },
            installNow(){
                this.installable=false;
                if(this.installer){
                    this.installer.prompt();
                    this.installer.userChoice.then(result => {
                        if (result.outcome === "accepted") {
                            console.log("Install accepted!")
                        } else {
                            console.log("Install denied!")
                        }
                    });
                }
            }
        },
        mounted() {
          this.$store.dispatch('setLanguage',this.$i18n.locale);
        },
      watch:{
          '$store.state.language': function(value) {
            this.$i18n.locale = value
          }
        }

    };
</script>
<style>
.v-tabs--vertical .v-tab{
  justify-content: flex-start;
}
.v-tabs--vertical .v-tab .v-icon{
  margin-right: 10px;
}
*{
  text-transform: none !important;
}
.v-card__title{
  font-size: 14px !important;
  color:gray;
}
    .fab{
        position: fixed !important;
        bottom: 20px;
        right: 20px;
        z-index: 100000000000;
    }
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .search_input .v-text-field__details{
        display: none;
    }
</style>
