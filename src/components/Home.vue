<template>
<div>
<h2>Home</h2>
<p class="animated infinite bounce">
  Your funds: {{funds | currency}}
</p>
<p @click="postSomething">
  postearAlgo
</p>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['funds']),

  },
  methods:{
        postSomething(){
          console.log("holla carjo aqui")
            axios.post('https://vuejs-stock-trader-54d6e.firebaseio.com/', {name: "juan"})
      .then(function(response){
        console.log('XXXX ', response)
      })
      .catch(error => console.log("YYY ", error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
