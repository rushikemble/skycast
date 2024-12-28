import { setStoredCities, setStoredOptions } from '../utils/storage';

chrome.runtime.onInstalled.addListener(() => {
  setStoredCities(['New York', 'London', 'Tokyo']);
  setStoredOptions({ homeCity: '' });
});
