export class BrowserStoragePolymorph {
  #storage

  constructor(storage:string) {
    this.#storage = storage
  }

  getItem(key) {
    return {
      'localStorage': (() => window.localStorage.getItem(key))(),
      'sessionStorage': (() => window.localStorage.getItem(key))(),
      // @ts-ignore
      'browser': (() => typeof browser !== 'undefined' ? browser.storage.local.get(key) : () => {})(),
    }[this.#storage]
  }
}

export default {
  name: 'store',
  cache: localStorage,
};
