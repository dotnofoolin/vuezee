// These things are common across all tests. This closely mimics main.js, but attaches everything to localVue from the test utils
import { createLocalVue } from '@vue/test-utils'
import store from '@/store/main.js'
import _ from 'lodash'

const localVue = createLocalVue()
Object.defineProperty(localVue.prototype, '$_', { value: _ })

// Be sure to export the things your tests need.
export {
    store, localVue
}
