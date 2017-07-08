<template>
    <div>
        <h2 class="display-3 font-weight 400">Stocks</h2>
        <v-layout row wrap>
            <stock v-for="stock in stocks" :stock="stock"></stock>
        </v-layout>
    </div>
</template>
<script>
    import Stock from './Stock.vue'
    export default {
        data() {
            return {
                stocks: this.$store.state.stocks
            }
        },
        components: {
            Stock
        }
    }

</script>
<style scoped>

</style>