import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import { Store } from 'vuex'

type Unit = {
  label: string,
  nPerGlass: number,
}

// define your typings for the store state
export interface State {
  glasses: number,
  options: {
    glassesGoal: number,
    units: Unit,
  }
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    glasses: 0,
    options: {
      glassesGoal: 8,
      units: {
        label: 'fl oz',
        nPerGlass: 8,
      }
    },
  },
  mutations: {
    increment (state) {
      state.glasses++
    },
    decrement (state) {
      state.glasses--
    },
  },
  getters: {
    glasses({ glasses }) {
      return glasses
    },
    glassesGoal({ options }) {
      return options.glassesGoal
    },
    getGoalPercent({ glasses, options }) {
      return (glasses / options.glassesGoal * 100)
    },
    units({ options }) {
      return options.units.label
    },
    glassesLocale(state) {
      return state.glasses * state.options.units.nPerGlass
    },
  },
})

export default store