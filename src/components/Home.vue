<template>
<div>
<h2>Home</h2>
<p class="animated infinite bounce">
  Your funds: {{funds | currency}}
</p>
<p @click="postSomething2">
  postearAlgoAhora si el bueno
</p>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {HTTP} from '../conf/http-common';
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
        postSomething2(){
      console.log("holla carjo aqui espeo postear")
      HTTP.post("",{name:'ramiro'})
      .then(function(response){
        console.log('XXXX ', response)
      })
      .catch(function(error){
        console.log('XXXX ', error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

    // postSomething(){
    //   console.log("holla carjo aqui")
    //   HTTP.get('users')
    //   .then(function(response){
    //     console.log('XXXX ', response.data)
    //   })
    //   .catch(error => console.log("YYY ", error))
    // },