import { State } from './index'

export default {
  updateGoal(state:State, newGoal:number) {
    state.options.glassesGoal = newGoal;
  },
  increment (state:State) {
    state.glasses++
  },
  decrement (state:State) {
    state.glasses--
  },
}