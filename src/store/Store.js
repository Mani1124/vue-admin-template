import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import state from './State'
import getters from './Getters'
import mutations from './Mutations'
import actions from './Actions'
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
})
Vue.use(Vuex)
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production',
})
