import { setStoredCities } from '../utils/storage';

chrome.runtime.onInstalled.addListener(() => {
  setStoredCities(['New York', 'London', 'Tokyo']);
});
