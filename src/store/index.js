import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      glasses: 0
    }
  },
  mutations: {
    increment (state) {
      state.glasses++
    }
  }
})

export default store