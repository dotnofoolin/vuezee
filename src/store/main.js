import Vue from 'vue'
import Vuex from 'vuex'
import highscores from './modules/highscores'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    highscores
  }
})
