<template>
    <v-flex xs4>
      <v-card class="mt-2 elevation-5">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{stock.name}}</h3>
            <div>Price: {{stock.price}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
        <v-text-field
              name="input-1"
              label="Quantity"
              id="testing"
              v-model="quantity"
            ></v-text-field>
          <v-btn class="primary green lighten-1 ma-2" :disabled="insufficientFunds || quantity <=0" @click.native="buyStock">
          {{insufficientFunds? 'Insufficient funds':'Buy'}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>
<script>
    export default {
        data(){
            return {
                quantity: 0
            }
        },
        props: ['stock'],
        methods: {
            buyStock(){
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    quantity: this.quantity
                }
                this.quantity = 0
                this.$store.dispatch('buyStocks', order)
                console.log(order)
            },

        },
        computed: {
             insufficientFunds(){
                return this.stock.price*this.quantity > this.$store.getters.funds
            }
        }
    }
</script>
<style scoped>
    
</style>