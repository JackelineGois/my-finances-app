import LocalStorageService from "./LocalStorageService";

export const USUARIO_LOGIN = "user_login";

export default class AuthService {
  static removeAuthUser() {
    LocalStorageService.removeItemAuth(USUARIO_LOGIN);
  }

  static isAuthenticatedUser() {
    const auth = LocalStorageService.hasAuthUser(USUARIO_LOGIN);
    return auth !== null;
  }

  static login(user) {
    LocalStorageService.addItem(USUARIO_LOGIN, user);
  }

  static obtainUserAuthenticated() {
    return LocalStorageService.obtainItem(USUARIO_LOGIN);
  }
}
