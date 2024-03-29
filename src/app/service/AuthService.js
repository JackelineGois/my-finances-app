import LocalStorageService from "./LocalStorageService";

export default class AuthService {
  static removeAuthUser() {
    const userRemoved = LocalStorageService.removeItemAuth("user_login");
  }
}
