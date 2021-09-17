import Vue from "vue"
import Vuex from "vuex"
import state from "./todo/state"
import mutations from "./todo/mutations"
import getters from "./todo/getters"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    mutations,
    getters
})