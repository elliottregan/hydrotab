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
    console.log('increment')
    state.glasses++
  },
  decrement (state:State) {
    if (state.glasses === 0) return;
    state.glasses--
  },
  updateGlassRequired(state:State, value:Boolean) {
    state.notifications.glassRequired = value
  }
}