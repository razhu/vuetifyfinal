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
          <v-btn class="primary green lighten-1 ma-2" :disabled="quantity <=0" @click.native="buyStock">Buy</v-btn>
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
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                stockQuantity: this.quantity
                }
                this.quantity = 0
                console.log(order)
            }
        }

    }
</script>
<style scoped>
    
</style>