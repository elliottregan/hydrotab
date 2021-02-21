import { Store } from 'vuex'

export default function init(store:Store<any>) {
  const today = new Date().toLocaleDateString()
  if (store.state.dateCreated !== today) {
    console.log('reset')
    store.commit('updateDateCreated', new Date().toLocaleDateString())
    store.commit('updateTotal', 0)
  }
}
