import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        stocks:[
            {id:1, name: "Business  Name 1", price: 1},
            {id:2, name: "Business  Name 2", price: 2},
            {id:3, name: "Business  Name 3", price: 3},
            {id:4, name: "Business  Name 4", price: 4},
            {id:5, name: "Business  Name 5", price: 5},
            {id:6, name: "Business  Name 6", price: 6},
            {id:7, name: "Business  Name 7", price: 7},

        ]
    }
})