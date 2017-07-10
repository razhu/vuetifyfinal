<template>
<div>
<h2>Home</h2>
<p>
  Your funds: {{funds | currency}}
</p>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['funds'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
