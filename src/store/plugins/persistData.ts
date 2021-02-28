import { storage } from '../../constants';
import { Store } from 'vuex'

const { cache } = storage;

export default function init(store:Store<any>) {
  const cachedStore = cache.getItem(storage.name)
  const jsonStore = JSON.parse(cachedStore || '')

  if (cache.getItem(storage.name) && shallowKeysEqual(jsonStore, store.state)) {
    initializeStore(store, jsonStore)
  }

  store.subscribe((_mutation, state) => {
    cache.setItem(storage.name, JSON.stringify(state));
  });

  function initializeStore(store:Store<any>, jsonStore:Store<any>) {
    store.replaceState(jsonStore);
  }
}

function shallowKeysEqual(object1:Object, object2:Object) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  return keys2.every((key, i) => key === keys2[i])
}
