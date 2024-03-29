import ApiService from "../ApiService";
import ErrorValidate from "../exception/ErrorValidate";

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

  saveRegister(user) {
    return this.post("/save", user);
  }

  validate(user) {
    const error = [];

    if (!user.name) {
      error.push("The name field is required");
    }
    if (!user.email) {
      error.push("The email field is required");
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/.test(user.email)) {
      error.push("Inform a Valid Email");
    }

    if (!user.password || !user.repeatPassword) {
      error.push("Type the password 2x");
    } else if (user.password !== user.repeatPassword) {
      error.push("The password doesn't match");
    }

    if (error && error.length > 0) {
      throw new ErrorValidate(error);
    }
  }
}

export default UserService;
