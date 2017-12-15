import Vue from 'vue'
import Vuex from 'vuex'

import authList from './modules/authList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authList
  }
})
