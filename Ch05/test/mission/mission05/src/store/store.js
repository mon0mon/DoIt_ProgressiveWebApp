import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        fnIncrement: (state) => {
            state.count++;
        },
        fnDecrement: (state) => state.count--
    },
    getters: {
        fnGetCount: (state) => {
            return state.count;
        }
    }
});