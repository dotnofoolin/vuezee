import { shallowMount } from '@vue/test-utils'
import Game from '@/views/Game.vue'

const factory = () => {
    return shallowMount(Game)
}

describe('Game.vue', () => {
  it('renders the correct markup', () => {
    const wrapper = factory()

    // Test a sample of the HTML, not the full thing. More of a smoke test really.
    expect(wrapper.html()).toContain('<span class="dice')
    expect(wrapper.html()).toContain('<div class="game">')
  })

  it('sets default data values', () => {
    const wrapper = factory()

    expect(wrapper.vm.roll_count).toEqual(0)
    expect(wrapper.vm.all_dice.length).toEqual(5)   
    expect(wrapper.vm.all_dice[0]).toHaveProperty('dice_id')
    expect(wrapper.vm.all_dice[0]).toHaveProperty('value')
    expect(wrapper.vm.all_dice[0]).toHaveProperty('selected')
  })
})
