import React, { useState } from "react";

import Card from "../components/Card";
import FormGroup from "../components/Form-group";
import { useNavigate } from "react-router-dom";
import UserService from "../app/service/UserService";
import { toast } from "react-toastify";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();
  const service = new UserService();

  const register = async () => {
    const variable = {
      name: name,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };
    console.log(variable);
    try {
      try {
        service.validate(variable);
      } catch (erro) {
        const messages = erro.messages;
        messages.forEach((msg) => {
          toast.error(msg);
        });
        return false;
      }

      const response = await service.saveRegister(variable);
      toast.success("User Registered", { theme: "colored" });
      console.log(response.data);

      navigate("/login", { replace: true });
    } catch (erro) {
      toast.error(erro.response.data, { theme: "colored" });
    }
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
                    setName(e.target.value);
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
                    setEmail(e.target.value);
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
                    setPassword(e.target.value);
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
                    setRepeatPassword(e.target.value);
                  }}
                />
              </FormGroup>
              <div className="padding">
                <button
                  onClick={register}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="pi  pi-save"></i> Save
                </button>
                <button
                  onClick={cancelRegisterForm}
                  type="button"
                  className="btn btn-danger"
                >
                  {" "}
                  <i className="pi pi-times"></i> Cancel{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>{" "}
    </div>
  );
}

export default RegisterUser;
