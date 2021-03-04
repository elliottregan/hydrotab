export class BrowserStoragePolymorph {
  #storage:string

  constructor(storage:string) {
    this.#storage = storage
  }

  getItem(key:string) {
    return {
      'localStorage': (() => window.localStorage.getItem(key))(),
      'sessionStorage': (() => window.sessionStorage.getItem(key))(),
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

  setItem(key:string, value:any) {
    return {
      'localStorage': (() => window.localStorage.setItem(key, value))(),
      'sessionStorage': (() => window.sessionStorage.setItem(key, value))(),
      'browser': (async () => {
      // @ts-ignore
        return typeof browser !== 'undefined' ? await browser.storage.local.set({[key]: value}) : () => {}
      })(),
    }[this.#storage]
  }
}

export default {
  name: 'store',
  cache: localStorage,
};
