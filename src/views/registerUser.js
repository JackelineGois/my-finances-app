import React, { useState } from "react";

import Card from "../components/Card";
import FormGroup from "../components/Form-group";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.repeatPassword);
  };

  const cancelRegisterForm = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div>
      {" "}
      <Card title="Register a User">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Name *" htmlFor="inputName">
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    setName({ name: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup label="Email *" htmlFor="inputEmail">
                <input
                  type="email"
                  value={email}
                  id="inputEmail"
                  className="form-control"
                  name="email"
                  onChange={(e) => {
                    setEmail({ email: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup label="Password *" htmlFor="inputPassword">
                <input
                  type="password"
                  value={password}
                  id="inputPassword"
                  className="form-control"
                  name="password"
                  onChange={(e) => {
                    setPassword({ password: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup label="Repet Password *" htmlFor="inputRepeatPassword">
                <input
                  type="password"
                  id="inputRepeatPassword"
                  value={repeatPassword}
                  className="form-control"
                  name="password"
                  onChange={(e) => {
                    setRepeatPassword({
                      repeatPassword: e.target.value,
                    });
                  }}
                />
              </FormGroup>
              <button
                onClick={register}
                type="button"
                className="btn btn-success"
              >
                Save
              </button>
              <button
                onClick={cancelRegisterForm}
                type="button"
                className="btn btn-danger"
              >
                {" "}
                Cancel{" "}
              </button>
            </div>
          </div>
        </div>
      </Card>{" "}
    </div>
  );
}

export default RegisterUser;
