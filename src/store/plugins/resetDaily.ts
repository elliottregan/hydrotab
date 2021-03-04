import { Store } from 'vuex'

export default function init(store:Store<any>) {
  const today = new Date().toLocaleDateString()
  console.log(today, store.state.dateCreated)
  
  if (store.state.dateCreated !== today) {
    store.commit('updateTotal', 0)
    store.commit('updateDateCreated', new Date().toLocaleDateString())
    console.log('reset', today, store.state.dateCreated)
  }
}
