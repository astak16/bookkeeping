import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    remark: "",
    price: "0.00"
  },
  mutations: {
    createRemark(state, msg) {
      state.remark = msg
    },
    createPrice(state, price) {
      state.price = price
    }
  },
  actions: {},
  modules: {}
})

export default store
