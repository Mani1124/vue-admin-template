<template>
    <div>
        <v-app-bar
            class="hidden-md-and-up"
            color="primary"
            fixed
            elevation="1"
            dark
        >
            <v-btn
                class="mr-3 white--text"
                icon
                @click="drawer = true"
            >
                <v-icon>
                    mdi-menu
                </v-icon>
            </v-btn>
            <p style="margin-bottom: 0px" class="text-h6">{{ $route.meta.name}}</p>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-app-bar
            class="hidden-sm-and-down"
            color="white"
            fixed
            style="height: 64px"
            elevation="1"
        >
            <img style="margin-left: 100px;height: 50px;width: 45px"
                    src="./../assets/logo.svg"
                    alt="Manipur Emblem"
            >
            <v-toolbar-title style="width: 400px;padding-left: 10px">
                <p class="ma-0 pa-0"><strong>{{ title }}</strong></p>
                <p class="ma-0 pa-0" style="font-size: 12px">{{ subtitle }}</p>
            </v-toolbar-title>

            <v-container fluid class="mx-auto ma-0 pa-0" style="height: 64px;position: relative;">
                <v-row class="ma-0" align="center" justify="left" style="height: 64px;" >
                    <v-btn
                        tile
                        dark
                        style="height: 100%;font-size: 15px"
                        @click="route(item)"
                        v-for="(item,index) in links" :key="index"
                        :class="{'active-link':currentRoute()===item.route,'link':currentRoute()!==item.route}"
                        class="text-capitalize"
                        text
                    >
                        <v-icon small>{{item.icon}}</v-icon>
                        <span class="ml-1">{{item.name}}</span>
                    </v-btn>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item
                    v-for="(link,index) in links"
                    :key="index"
                    @click="route(link)"
                >
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <transition>
            <router-view
                name="public"
                style="margin-top: 54px;width: 100vw;padding-bottom:400px"
            />
        </transition>

    </div>

</template>
<script>
    export default {
        data () {
            return {
                drawer: false,
                links: [
                    {
                        name: 'Sign In',
                        route: 'SingIn',
                        icon: 'mdi-login',
                    },
                ],

            }
        },
        methods: {
            currentRoute() {
                return this.$route.name;
            },
            route (link) {
                this.$router.push({ name: link.route })
            },
        },

    }
</script>
<style>
    .active-link{
        background: #1565c0 !important;
        color: white !important;
    }
    .link{
        color: black !important;
    }
</style>
