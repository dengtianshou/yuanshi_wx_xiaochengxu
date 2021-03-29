const globalData: any = {};

export function setGlobalData(key: string, value: string) {
  globalData[key] = value;
}

export function getGlobalData(key: string) {
  return globalData[key];
}