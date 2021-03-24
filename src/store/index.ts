import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import { Store } from 'vuex'
import persistData from './plugins/persistData';
import resetDaily from './plugins/resetDaily';
import mutateOnMutate from './plugins/mutateOnMutate';
import { BrowserStoragePolymorph } from '../constants';
import { Unit } from "../common/types";

import mutations from './mutations'

// define your typings for the store state
export interface State {
  dateCreated: String,
  glasses: number,
  options: {
    glassesGoal: number,
    units: Unit,
    showTopSites: Boolean,
  },
  notifications: {
    glassRequired: Boolean,
    lastGlass: Date,
  },
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

// @ts-ignore
const polyStore = new BrowserStoragePolymorph(typeof browser !== 'undefined' ? 'browser' : 'localStorage')

export const fetchCache = async () => {

  const jsonStore = await polyStore.getItem('store')
  const cachedStore = JSON.parse(jsonStore || '{}')

  return createStore<State>({
    plugins: [
      persistData(cachedStore, polyStore),
      resetDaily,
      mutateOnMutate('increment', 'updateGlassRequired', false),
    ],
  
    state: {
      dateCreated: new Date().toLocaleDateString(),
      glasses: 0,
      options: {
        glassesGoal: 8,
        units: {
          type: 'Imperial',
          label: 'fl oz',
          nPerGlass: 8,
        },
        showTopSites: false,
      },
      notifications: {
        glassRequired: false,
        lastGlass: new Date(),
      },
    },
    mutations,
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
      showTopSites(state:State) {
        return state.options.showTopSites
      },
      glassesLocale(state:State) {
        return state.glasses * state.options.units.nPerGlass
      },
      glassRequired(state:State) {
        return state.notifications.glassRequired
      },
    },
  })
}
