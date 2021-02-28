import { storage, BrowserStoragePolymorph } from '../../constants';
import { Store } from 'vuex'

// const { cache } = storage;

// @ts-ignore
const polyStore = new BrowserStoragePolymorph(typeof browser !== 'undefined' ? 'browser' : 'localStorage')

export default async function init(store:Store<any>) {
  const cachedStore = await polyStore.getItem(storage.name)
  console.log('cachedStore', cachedStore)
  const jsonStore = JSON.parse(cachedStore || '')
  console.log('jsonStore', jsonStore)

  if (await polyStore.getItem(storage.name) && shallowKeysEqual(jsonStore, store.state)) {
    initializeStore(store, jsonStore)
  }

  store.subscribe((_mutation, state) => {
    // cache.setItem(storage.name, JSON.stringify(state));
    polyStore.setItem(storage.name, JSON.stringify(state))
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
