import { storage } from '../../constants';
import { Store } from 'vuex'

const { cache } = storage;

export default function init(store:Store<any>) {
  
  if (cache.getItem(storage.name)) {
    initializeStore(store, cache.getItem(storage.name) || '')
  }

  store.subscribe((_mutation, state) => {
    cache.setItem(storage.name, JSON.stringify(state));
  });


  function initializeStore(store:Store<any>, cachedStore:string) {
    store.replaceState(JSON.parse(cachedStore));
  }
}
