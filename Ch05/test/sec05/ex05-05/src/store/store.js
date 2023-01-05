import Vuex from "vuex"
import Vue from "vue"
import Api from "@/JS/API"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        fnIncData: function (state) {
            console.log(state.count);
            return state.count++;
        },
        fnDecData: state => state.count--
    },
    getters: {
        fnGetCount: (state) => {
            return state.count;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async fnAPIDecData({commit}, state) {
            const result = await Api.fnDecrement();
            if (result === true) commit('fnDecData');
        }
    }
});