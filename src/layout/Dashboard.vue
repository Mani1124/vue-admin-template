<template>
    <div>
        <drawer/>
        <app-bar/>
        <v-main style="padding-top: 64px;">
            <router-view name="admin" style="padding-left: 20px"></router-view>
        </v-main>
    </div>
</template>

<script>
    import Drawer from "./components/Drawer";
    import AppBar from "./components/AppBar";
    export default {
        components:{Drawer,AppBar},
        data: () => ({


        }),
        methods:{


        }
    }
</script>
<style>
</style>
