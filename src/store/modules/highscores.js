import _ from 'lodash'

const state = {
  highscores: []
}

const getters = {
    top5 (state) {
        return _.orderBy(state.highscores, 'score', 'desc').slice(0, 5)
    }
}

const mutations = {
  SAVE_HIGHSCORES (state, data) {
    state.highscores = data
  },
  SAVE_HIGHSCORE (state, data) {
    state.highscores.push(data)
  }
}

const actions = {
  saveHighscore: (context, score) => {
    var data = {
        score: score,
        date: new Date().toLocaleDateString()
    }

    context.commit('SAVE_HIGHSCORE', data)
    localStorage.setItem('vuezee-highscores', JSON.stringify(state.highscores))
  },
  fetchHighscores: (context) => {
    var local_highscores = localStorage.getItem('vuezee-highscores')

    if (local_highscores) {
        context.commit('SAVE_HIGHSCORES', JSON.parse(local_highscores))
    }
  }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
