import { shallowMount } from '@vue/test-utils'
import { store, localVue } from '../test_helper'
import Highscores from '@/components/Highscores.vue'

const factory = () => {
  store.dispatch('highscores/saveHighscore', 200)
  return shallowMount(Highscores, { store, localVue })
}

describe('Highscores.vue', () => {
    it('renders the correct markup', () => {
      const wrapper = factory()

      // Test a sample of the HTML, not the full thing. More of a smoke test really.
      expect(wrapper.html()).toContain('High Scores on This Machine')
      expect(wrapper.html()).toContain('<table')
    })

    it('has scores in the store', () => {
      const wrapper = factory()

      expect(wrapper.vm.top5.length).toBeGreaterThanOrEqual(1)
    })
})
