import { Store } from 'vuex'

export default function init(store:Store<any>) {
  const today = new Date().toLocaleDateString()
  
  if (store.state.dateCreated !== today) {
    store.commit('updateTotal', 0)
    store.commit('updateDateCreated', new Date().toLocaleDateString())
  }
}
