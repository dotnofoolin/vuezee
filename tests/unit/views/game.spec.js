import { shallowMount } from '@vue/test-utils'
import { store, localVue } from '../test_helper'
import Game from '@/views/Game.vue'

const factory = () => {
  store.dispatch('scorecard/resetScorecard')
  return shallowMount(Game, { store, localVue })
}

describe('Game.vue', () => {
  it('renders the correct markup', () => {
    const wrapper = factory()

    // Test a sample of the HTML, not the full thing. More of a smoke test really.
    expect(wrapper.html()).toContain('<span class="dice')
    expect(wrapper.html()).toContain('<div id="game">')
    expect(wrapper.html()).toContain('<title-howto-about') // Currently stubs
    expect(wrapper.html()).toContain('<highscores') // Currently stubs
  })

  it('sets default data values', () => {
    const wrapper = factory()

    expect(wrapper.vm.roll_count).toEqual(0)
    expect(wrapper.vm.all_dice.length).toEqual(5)
    for (var dice of wrapper.vm.all_dice) {
      expect(dice).toHaveProperty('dice_id')
      expect(dice).toHaveProperty('value')
      expect(dice).toHaveProperty('selected')
    }
  })

  describe('roll', () => {
    it('sets dice value randomly between 1 and 6', () => {
      const wrapper = factory()

      var dice = {
        dice_id: 1,
        value: null,
        selected: false
      }

      wrapper.vm.roll(dice)

      expect(dice.value).toBeGreaterThanOrEqual(1)
      expect(dice.value).toBeLessThanOrEqual(6)
    })
  })

  describe('rollAll', () => {
    it('sets all dice value randomly between 1 and 6', () => {
      const wrapper = factory()

      wrapper.vm.rollAll()

      for (var dice of wrapper.vm.all_dice) {
        expect(dice.value).toBeGreaterThanOrEqual(1)
        expect(dice.value).toBeLessThanOrEqual(6)
      }
    })

    it('only rolls unselected dice', () => {
      const wrapper = factory()

      wrapper.vm.all_dice[0].selected = true
      wrapper.vm.all_dice[1].selected = true

      wrapper.vm.rollAll()

      expect(wrapper.vm.all_dice[0].value).toBeNull()
      expect(wrapper.vm.all_dice[1].value).toBeNull()

      for (var dice of wrapper.vm.all_dice.filter(d => d.selected === false)) {
        expect(dice.value).toBeGreaterThanOrEqual(1)
        expect(dice.value).toBeLessThanOrEqual(6)
      }
    })

    it('increments roll_count', () => {
      const wrapper = factory()

      var expected_roll_count = wrapper.vm.roll_count

      wrapper.vm.rollAll()

      expect(wrapper.vm.roll_count).toEqual(expected_roll_count + 1)
    })
  })

  describe('toggleSelected', () => {
    it('changes dice selected boolean', () => {
      const wrapper = factory()

      var dice = {
        dice_id: 1,
        value: null,
        selected: false
      }
      wrapper.vm.roll_count = 1

      wrapper.vm.toggleSelected(dice)
      expect(dice.selected).toBe(true)
      wrapper.vm.toggleSelected(dice)
      expect(dice.selected).toBe(false)
    })

    it('only toggles when roll_count is > 0', () => {
      const wrapper = factory()

      var dice = {
        dice_id: 1,
        value: null,
        selected: false
      }

      wrapper.vm.toggleSelected(dice)
      expect(dice.selected).toBe(false)
    })
  })

  describe('rollLimitReached', () => {
    it('returns false if below limit', () => {
      const wrapper = factory()

      expect(wrapper.vm.rollLimitReached()).toBe(false)
    })

    it('returns true when limit reached', () => {
      const wrapper = factory()

      wrapper.vm.roll_count = 3
      expect(wrapper.vm.rollLimitReached()).toBe(true)
    })
  })

  describe('diceClass', () => {
    it('returns correct class name', () => {
      const wrapper = factory()

      expect(wrapper.vm.diceClass(1)).toEqual('fa-dice-one')
      expect(wrapper.vm.diceClass(2)).toEqual('fa-dice-two')
      expect(wrapper.vm.diceClass(3)).toEqual('fa-dice-three')
      expect(wrapper.vm.diceClass(4)).toEqual('fa-dice-four')
      expect(wrapper.vm.diceClass(5)).toEqual('fa-dice-five')
      expect(wrapper.vm.diceClass(6)).toEqual('fa-dice-six')
      expect(wrapper.vm.diceClass(null)).toEqual('fa-square')
    })
  })

  describe('rollText', () => {
    it('returns correct text based on roll_count', () => {
      const wrapper = factory()

      expect(wrapper.vm.rollText()).toEqual('Click Roll to Get Started!')
      wrapper.vm.roll_count = 1
      expect(wrapper.vm.rollText()).toEqual('First Roll')
      wrapper.vm.roll_count = 2
      expect(wrapper.vm.rollText()).toEqual('Second Roll')
      wrapper.vm.roll_count = 3
      expect(wrapper.vm.rollText()).toEqual('Final Roll. Please Score.')
    })

    it('returns different text when game is complete', () => {
      const wrapper = factory()

      for (var upper_line of wrapper.vm.scorecard.upper_section) {
        upper_line.scored = true
      }

      for (var lower_line of wrapper.vm.scorecard.lower_section) {
        lower_line.scored = true
      }

      expect(wrapper.vm.rollText()).toEqual('Game Complete! Thanks for Playing!')
    })
  })

  describe('resetDice', () => {
    it('resets dice and roll_count', () => {
      const wrapper = factory()

      wrapper.vm.resetDice()

      expect(wrapper.vm.roll_count).toEqual(0)
      for (var dice of wrapper.vm.all_dice) {
        expect(dice.value).toBeNull()
        expect(dice.selected).toBe(false)
      }
    })
  })

  describe('addGrandTotal', () => {
    it('sets grand_total to sum of upper and lower totals', () => {
      const wrapper = factory()

      wrapper.vm.scorecard.upper_total = 10
      wrapper.vm.scorecard.lower_total = 10

      wrapper.vm.addGrandTotal()

      expect(wrapper.vm.scorecard.grand_total).toEqual(20)
    })
  })

  describe('scoreRoll', () => {
    describe('when roll_count is 0', () => {
      it('returns without changing scores', () => {
        const wrapper = factory()

        var line = wrapper.vm.scorecard.upper_section[0]
        var expected = wrapper.vm.scorecard.grand_total

        wrapper.vm.scoreRoll(line)

        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when line is already scored', () => {
      it('returns without changing scores', () => {
        const wrapper = factory()

        var line = wrapper.vm.scorecard.upper_section[0]
        line.scored = true
        var expected = wrapper.vm.scorecard.grand_total

        wrapper.vm.rollAll()
        wrapper.vm.scoreRoll(line)

        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when unknown line id', () => {
      it('returns without changing scores', () => {
        const wrapper = factory()

        var line = wrapper.vm.scorecard.upper_section[0]
        line.id = 'random_garbage'
        var expected = wrapper.vm.scorecard.grand_total

        wrapper.vm.rollAll()
        wrapper.vm.scoreRoll(line)

        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
        line.id = 'aces' // Change it back since it's stored in the store.
      })
    })

    describe('when scoring aces', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 1
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'aces')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.upper_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring twos', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 2
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'twos')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.upper_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring threes', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 3
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'threes')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.upper_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring fours', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 4
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'fours')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.upper_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring fives', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 5
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'fives')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.upper_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring sixes', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 6
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'sixes')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.upper_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring - check for bonus', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'twos')[0]
        var bonus_line = wrapper.vm.scorecard.upper_section.filter(l => l.id === 'bonus')[0]
        wrapper.vm.roll_count = 1
        wrapper.vm.scorecard.upper_total = 65

        expect(bonus_line.scored).toBe(false)

        wrapper.vm.scoreRoll(line)

        expect(bonus_line.scored).toBe(true)
        expect(bonus_line.score).toEqual(35)
        expect(wrapper.vm.scorecard.upper_total).toEqual(100)
        expect(wrapper.vm.scorecard.grand_total).toEqual(100)
      })
    })

    describe('when scoring three_of_a_kind', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 6
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'three_of_a_kind')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring four_of_a_kind', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var dice_value = 6
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          dice.value = dice_value
          expected += dice_value
        }

        var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'four_of_a_kind')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring full_house', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var expected = 25
        wrapper.vm.all_dice[0].value = 1
        wrapper.vm.all_dice[1].value = 1
        wrapper.vm.all_dice[2].value = 2
        wrapper.vm.all_dice[3].value = 2
        wrapper.vm.all_dice[4].value = 2

        var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'full_house')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring small_straight', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var expected = 30
        wrapper.vm.all_dice[0].value = 1
        wrapper.vm.all_dice[1].value = 2
        wrapper.vm.all_dice[2].value = 3
        wrapper.vm.all_dice[3].value = 4
        wrapper.vm.all_dice[4].value = 1

        var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'small_straight')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring large_straight', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        var expected = 40
        wrapper.vm.all_dice[0].value = 1
        wrapper.vm.all_dice[1].value = 2
        wrapper.vm.all_dice[2].value = 3
        wrapper.vm.all_dice[3].value = 4
        wrapper.vm.all_dice[4].value = 5

        var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'large_straight')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })

    describe('when scoring vuezee', () => {
      describe('when it is the first one', () => {
        it('saves proper scores', () => {
          const wrapper = factory()

          var dice_value = 6
          var expected = 50
          for (var dice of wrapper.vm.all_dice) {
            dice.value = dice_value
          }

          var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'vuezee')[0]
          wrapper.vm.roll_count = 1

          wrapper.vm.scoreRoll(line)

          expect(line.scored).toBe(true)
          expect(line.score).toEqual(expected)
          expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
          expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
        })
      })

      describe('when it is the second one', () => {
        it('saves proper scores', () => {
          const wrapper = factory()

          var dice_value = 6
          var expected = 150
          for (var dice of wrapper.vm.all_dice) {
            dice.value = dice_value
          }

          var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'vuezee')[0]
          line.scored = true
          line.score = 50
          wrapper.vm.scorecard.lower_total = 50
          wrapper.vm.roll_count = 1

          wrapper.vm.scoreRoll(line)

          expect(line.scored).toBe(true)
          expect(line.score).toEqual(expected)
          expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
          expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
        })
      })
    })

    describe('when scoring chance', () => {
      it('saves proper scores', () => {
        const wrapper = factory()

        wrapper.vm.rollAll()
        var expected = 0
        for (var dice of wrapper.vm.all_dice) {
          expected += dice.value
        }

        var line = wrapper.vm.scorecard.lower_section.filter(l => l.id === 'chance')[0]
        wrapper.vm.roll_count = 1

        wrapper.vm.scoreRoll(line)

        expect(line.scored).toBe(true)
        expect(line.score).toEqual(expected)
        expect(wrapper.vm.scorecard.lower_total).toEqual(expected)
        expect(wrapper.vm.scorecard.grand_total).toEqual(expected)
      })
    })
  })

  describe('gameComplete', () => {
    it('returns true when all scorecard lines are scored', () => {
      const wrapper = factory()

      for (var upper_line of wrapper.vm.scorecard.upper_section) {
        upper_line.scored = true
      }

      for (var lower_line of wrapper.vm.scorecard.lower_section) {
        lower_line.scored = true
      }

      expect(wrapper.vm.gameComplete()).toBe(true)
    })

    it('returns false if not all the scorecard lines are scored', () => {
      const wrapper = factory()

      for (var upper_line of wrapper.vm.scorecard.upper_section) {
        upper_line.scored = true
      }

      for (var lower_line of wrapper.vm.scorecard.lower_section) {
        lower_line.scored = false
      }

      expect(wrapper.vm.gameComplete()).toBe(false)
    })
  })

  describe('newGame', () => {
    it('resets dice and scorecard', () => {
      const wrapper = factory()

      wrapper.vm.newGame()

      expect(wrapper.vm.roll_count).toEqual(0)

      for (var dice of wrapper.vm.all_dice) {
        expect(dice.value).toBeNull()
        expect(dice.selected).toBe(false)
      }

      for (var upper_line of wrapper.vm.scorecard.upper_section) {
        expect(upper_line.score).toEqual(0)
        expect(upper_line.scored).toBe(false)
      }

      for (var lower_line of wrapper.vm.scorecard.lower_section) {
        expect(lower_line.score).toEqual(0)
        expect(lower_line.scored).toBe(false)
      }

      expect(wrapper.vm.scorecard.upper_total).toEqual(0)
      expect(wrapper.vm.scorecard.lower_total).toEqual(0)
      expect(wrapper.vm.scorecard.grand_total).toEqual(0)
    })
  })
})
