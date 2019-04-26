import { shallowMount } from '@vue/test-utils'
import { store, localVue } from '../test_helper'
import Game from '@/views/Game.vue'

const factory = () => {
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

    xit('returns different text when game is complete', () => {
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

  /*
  describe('Game.vue', () => {
    it('sets default data values', () => {
      const wrapper = factory()

    })
  })
  */
})
