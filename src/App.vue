<template>
<v-app id="app">
    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light 
      overflow
      absolute
    >
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>ÏÏÏ
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/">Home</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/portfolio">Portofolio</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

                <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/stocks">Stocks</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

                        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><a href="#" @click.native="saveData">Save</a></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>
    <v-toolbar fixed class="green" dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-toolbar-title>funds: {{funds | currency}}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
      <v-footer class="indigo green">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

import axios from 'axios'
// axios.defaults.baseURL = 'https://vuejs-stock-trader-54d6e.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



export default {
  name: 'app',
  data(){
    return {
             drawer: null,
        mini: false,
        right: null
    }
  },
  created(){
    this.$store.dispatch('setStocks')
  },
  computed: {
    ...mapGetters(['funds'])
  },
  methods:{
    saveData(){
      console.log("aquiiii")
     const data = {
       funds: this.$store.getters.funds ,
       stockPortfolio: this.$store.getters.stockPortfolio ,
       stocks: this.$store.getters.stocks ,
     }
    //  console.log("XXX ", baseURL)
      // axios.post('https://vuejs-stock-trader-54d6e.firebaseio.com/', {name: "juan"})
      // .then(function(response){
      //   console.log('XXXX ', response)
      // })
      // .catch(error => console.log("YYY ", error))
    }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(assets/fonts/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
       local('MaterialIcons-Regular'),
       url(assets/fonts/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
       url(assets/fonts/iconfont/MaterialIcons-Regular.woff) format('woff'),
       url(assets/fonts/iconfont/MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}
</style>
