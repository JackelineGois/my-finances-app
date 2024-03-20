import React, { useState } from "react";
import Card from "../components/Card";
import FormGroup from "../components/Form-group";
import { useNavigate } from "react-router-dom";
import UserService from "../app/service/UserService";
import LocalStorageService from "../app/service/LocalStorageService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const service = new UserService();
  const navigate = useNavigate();

  const logIn = async () => {
    try {
      const response = await service.autenticar({
        email: email,
        password: password,
      });
      LocalStorageService.addItem("user_login", response.data);
      navigate("/home", { replace: true });
    } catch (erro) {
      setErrorMessage(erro.response.data);
    }
  };

  const registerForm = () => {
    navigate("/register-user", { replace: true });
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          <Card title="Login">
            <div className="row">
              <span> {errorMessage}</span>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <fieldset>
                    <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Type Your Email"
                      />
                    </FormGroup>
                    <FormGroup
                      label="Password *"
                      htmlFor="exampleInputPassword1"
                    >
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Type your password"
                      />
                    </FormGroup>
                    <button onClick={logIn} className="btn btn-success">
                      Log In
                    </button>
                    <button className="btn btn-danger" onClick={registerForm}>
                      Register
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
