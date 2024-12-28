export interface LocalStorage {
  cities?: string[];
  options?: LocalStorageOptions;
}

export interface LocalStorageOptions {
  homeCity: string;
}
export type LocalStorageKeys = keyof LocalStorage;

export const setStoredCities = (cities: string[]) => {
  const vals: LocalStorage = { cities };
  return new Promise<void>((resolve, reject) => {
    try {
      chrome.storage.local.set(vals, () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getStoredCities = (): Promise<void> => {
  const keys: LocalStorageKeys[] = ['cities'];
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(keys, (res) => {
        resolve(res?.cities ?? []);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const setStoredOptions = (options: LocalStorage['options']) => {
  const vals: LocalStorage = { options };
  return new Promise<void>((resolve, reject) => {
    try {
      chrome.storage.local.set(vals, () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getStoredOptions = (): Promise<LocalStorageOptions> => {
  const keys: LocalStorageKeys[] = ['options'];
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(keys, (res) => {
        resolve(res?.options ?? {});
      });
    } catch (error) {
      reject(error);
    }
  });
};
