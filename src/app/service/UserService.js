import ApiService from "../ApiService";

class UserService extends ApiService {
  constructor() {
    super("/api/usuarios");
  }

  autenticar(credentials) {
    return this.post("/autenticar", credentials);
  }

  getBalancePerUser(id) {
    return this.get(`/${id}/balance`);
  }
}

export default UserService;
