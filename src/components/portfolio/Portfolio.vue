<template>
   <div>
    <v-layout row wrap>
    <stock v-for="stock in stocks" :stock="stock"></stock>
    </v-layout>
   </div>
</template>
<script>
    import Stock from './Stock.vue'
    import {mapGetters} from 'vuex'
    export default {
        components: {
            Stock
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
        })
        }
    }
</script>
<style scoped>
    
</style>