export default class LocalStorageService {
  static addItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static obtainItem(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  static hasAuthUser(key) {
    return localStorage.getItem(key);
  }

  static removeItemAuth(key) {
    localStorage.removeItem(key);
  }
}
