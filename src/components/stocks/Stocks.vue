<template>
         <v-layout row wrap>
          <v-flex xs12>
            <v-card class="blue-grey darken-2 white--text" v-for="stock in stocks">
              <v-card-title primary-title>
                <div class="headline">{{stock.name}}</div>
                <br/>
                <div>{{stock.price}}</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Buy now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
           </v-layout row wrap>

</template>
<script>
export default {
        data(){
     return {
         stocks: this.$store.state.stocks
     }   
    }
}
</script>
<style scoped>
    
</style>