import { State } from './index'
import { Unit } from "../common/types";

export default {
  updateDateCreated(state:State, newDate:string) {
    state.dateCreated = newDate
  },
  updateGoal(state:State, newGoal:number) {
    state.options.glassesGoal = newGoal;
  },
  updateUnits(state:State, unit:Unit) {
    state.options.units = unit;
  },
  updateTotal(state:State, newTotal:number) {
    state.glasses = newTotal
  },
  increment (state:State) {
    state.glasses++
  },
  decrement (state:State) {
    if (state.glasses === 0) return;
    state.glasses--
  },
  updateGlassRequired(state:State, value:Boolean) {
    state.notifications.glassRequired = value
    state.notifications.lastGlass = new Date()
  }
}