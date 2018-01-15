<template>
    <div>{{status}}</div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapActions} from 'vuex';
    export default {
        name: "star-news",
        computed:{
            ...mapState(['status']),
        },
        store
    }
</script>

<style scoped>

</style>