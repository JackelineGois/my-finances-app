import React, { useState } from "react";
import { useContext } from "react";
import Card from "../components/Card";
import FormGroup from "../components/Form-group";
import { useNavigate } from "react-router-dom";
import UserService from "../app/service/UserService";
import { toast } from "react-toastify";
import { AuthContext } from "../main/AuthenticationProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const service = new UserService();
  const navigate = useNavigate();
  const { beginSession } = useContext(AuthContext);

  const logIn = async () => {
    try {
      const response = await service.autenticar({
        email: email,
        password: password,
      });
      beginSession(response.data);

      navigate("/home", { replace: true });
    } catch (erro) {
      toast.error(erro.response.data, { theme: "colored" });
    }
  };

  const registerForm = () => {
    navigate("/register-user", { replace: true });
  };

  return (
    <div className="row center">
      <div className="col-md-6 ">
        <div className="bs-docs-section">
          <Card title="Login">
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
                    <div className="padding">
                      <button onClick={logIn} className="btn btn-success">
                        Log In
                      </button>
                      <button className="btn btn-danger" onClick={registerForm}>
                        Register
                      </button>
                    </div>
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
