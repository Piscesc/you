import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    seleNum: 1
  },
  mutations: {
    increment (state) {
      state.count++
    },
    reduce (state) {
      state.count--
    }
  }
})
