const state = {
  scorecard: {
    upper_section: [
      {
        id: 'aces',
        label: 'Aces',
        howto: 'Count and Score Only Aces',
        score: 0,
        scored: false
      },
      {
        id: 'twos',
        label: 'Twos',
        howto: 'Count and Score Only Twos',
        score: 0,
        scored: false
      },
      {
        id: 'threes',
        label: 'Threes',
        howto: 'Count and Score Only Threes',
        score: 0,
        scored: false
      },
      {
        id: 'fours',
        label: 'Fours',
        howto: 'Count and Score Only Fours',
        score: 0,
        scored: false
      },
      {
        id: 'fives',
        label: 'Fives',
        howto: 'Count and Score Only Fives',
        score: 0,
        scored: false
      },
      {
        id: 'sixes',
        label: 'Sixes',
        howto: 'Count and Score Only Sixes',
        score: 0,
        scored: false
      },
      {
        id: 'bonus',
        label: 'Bonus',
        howto: 'If Aces thru Sixes Summed >= 63 (35)',
        score: 0,
        scored: false
      }
    ],
    lower_section: [
      {
        id: 'three_of_a_kind',
        label: '3 of a Kind',
        howto: 'Add Total of All Dice',
        score: 0,
        scored: false
      },
      {
        id: 'four_of_a_kind',
        label: '4 of a Kind',
        howto: 'Add Total of All Dice',
        score: 0,
        scored: false
      },
      {
        id: 'full_house',
        label: 'Full House',
        howto: 'One Triple and One Double (25)',
        score: 0,
        scored: false
      },
      {
        id: 'small_straight',
        label: 'Small Straight',
        howto: 'Sequence of 4 (30)',
        score: 0,
        scored: false
      },
      {
        id: 'large_straight',
        label: 'Large Straight',
        howto: 'Sequence of 5 (40)',
        score: 0,
        scored: false
      },
      {
        id: 'vuezee',
        label: 'Vuezee',
        howto: '5 of a Kind (50). Bonus for additionals (100)',
        score: 0,
        scored: false
      },
      {
        id: 'chance',
        label: 'Chance',
        howto: 'Add All 5 Dice',
        score: 0,
        scored: false
      }
    ],
    upper_total: 0,
    lower_total: 0,
    grand_total: 0
  }
}

const getters = {
}

const mutations = {
  SAVE_SCORECARD (state, data) {
    state.scorecard = data
  }
}

const actions = {
  updateScorecard: (context) => {
    localStorage.setItem('vuezee-scorecard', JSON.stringify(state.scorecard))
  },
  fetchScorecard: (context) => {
    var local_scorecard = localStorage.getItem('vuezee-scorecard')

    if (local_scorecard) {
        context.commit('SAVE_SCORECARD', JSON.parse(local_scorecard))
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
