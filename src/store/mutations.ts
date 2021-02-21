import { State } from './index'

export default {
  updateDateCreated(state:State, newDate:string) {
    state.dateCreated = newDate
  },
  updateGoal(state:State, newGoal:number) {
    state.options.glassesGoal = newGoal;
  },
  updateTotal(state:State, newTotal:number) {
    state.glasses = newTotal
  },
  increment (state:State) {
    state.glasses++
  },
  decrement (state:State) {
    state.glasses--
  },
}