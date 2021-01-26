import { createStore } from 'vuex';
// define injection key
export const key = Symbol();
export const store = createStore({
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
        increment(state) {
            state.glasses++;
        },
        decrement(state) {
            state.glasses--;
        },
    },
    getters: {
        glasses({ glasses }) {
            return glasses;
        },
        glassesGoal({ options }) {
            return options.glassesGoal;
        },
        getGoalPercent({ glasses, options }) {
            console.log(glasses / options.glassesGoal * 100);
            return glasses / options.glassesGoal * 100;
        },
        units({ options }) {
            return options.units.label;
        },
        glassesLocale(state) {
            return state.glasses * state.options.units.nPerGlass;
        },
    },
});
export default store;
//# sourceMappingURL=index.js.map