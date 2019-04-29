import { shallowMount } from '@vue/test-utils'
import { store, localVue } from '../test_helper'
import TitleHowtoAbout from '@/components/TitleHowtoAbout.vue'

const factory = () => {
  return shallowMount(TitleHowtoAbout, { store, localVue })
}

describe('TitleHowtoAbout.vue', () => {
    it('renders the correct markup', () => {
      const wrapper = factory()

      // Test a sample of the HTML, not the full thing. More of a smoke test really.
      expect(wrapper.html()).toContain('<div id="title-howto-about">')
      expect(wrapper.html()).toContain('How To')
      expect(wrapper.html()).toContain('About')
    })

    it('sets default data values', () => {
      const wrapper = factory()

      expect(wrapper.vm.show_about_modal).toBe(false)
      expect(wrapper.vm.show_howto_modal).toBe(false)
    })
})
