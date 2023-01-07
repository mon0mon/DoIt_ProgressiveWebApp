import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sTitle: ''
  },
  getters: {
    fnGetData(state) {
      return state.sTitle;
    }
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    fnSetData: function (state, payload) {
      return state.sTitle;
    }
  },
  actions: {
  },
  modules: {
  }
})
