import { browser } from 'webextension-polyfill-ts';

browser.runtime.onInstalled.addListener(async ({ reason }) => {
  if (reason === 'install') {
    return browser.tabs.create({
      url: browser.runtime.getURL('index.html'),
    });
  }
});
