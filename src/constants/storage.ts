export class BrowserStoragePolymorph {
  #storage

  constructor(storage:string) {
    this.#storage = storage
  }

  getItem(key) {
    return {
      'localStorage': (() => window.localStorage.getItem(key))(),
      'sessionStorage': (() => window.sessionStorage.getItem(key))(),
      // @ts-ignore
      'browser': (async () => {
        // @ts-ignore
        if(typeof browser !== 'undefined') {
        // @ts-ignore
          const store = await browser.storage.local.get(key)
          return store[key]
        } else {
          return () => {}
        }
      })(),
    }[this.#storage]
  }

  setItem(key, value) {
    return {
      'localStorage': (() => window.localStorage.setItem(key, value))(),
      'sessionStorage': (() => window.sessionStorage.setItem(key, value))(),
      // @ts-ignore
      'browser': (() => {
      // @ts-ignore
        return typeof browser !== 'undefined' ? browser.storage.local.set({[key]: value}) : () => {}
      })(),
    }[this.#storage]
  }
}

export default {
  name: 'store',
  cache: localStorage,
};
