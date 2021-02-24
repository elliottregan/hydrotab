import { Store } from 'vuex'
import { Router } from 'vue-router'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>,
    $router: Router,
    $refs: {string: HTMLElement},
  }
}