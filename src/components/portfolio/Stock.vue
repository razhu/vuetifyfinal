<template>
    <v-flex xs4>
      <v-card class="mt-2 elevation-5">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{stock.name}}</h3>
            <div>Price: {{stock.price}}</div>
            <div>Quantity: {{stock.quantity}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
        <v-text-field
              name="input-1"
              label="Quantity"
              id="testing"
              v-model="quantity"
            ></v-text-field>
          <v-btn class="primary green lighten-1 ma-2" :disabled="quantity <=0" @click.native="sellStockAsap">Sell</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>
<script>
        import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                quantity: 0
            }
        },
        props: ['stock'],
        methods: {
                ...mapActions(['sellStock']),
                sellStockAsap(){
                        const order = {
                        id: this.stock.id,
                        price: this.stock.price,
                        quantity: this.stock.quantity,
                        }
                        this.sellStock(order)
                        this.quantity = 0
                }
        }
    }
</script>
<style scoped>
</style>