<template>

</template>
<script>
    export default {
        data(){
            return{

            }
        },
        created() {
            this.logout();
        },
        methods:{
            logout(){
                this.$store.dispatch("signOut");
                this.$router.push({name:'SingIn'})
            }
        }
    }
</script>
