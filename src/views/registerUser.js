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

  const validate = () => {
    const msgs = [];

    if (!name) {
      msgs.push("The name field is required");
    }
    if (!email) {
      msgs.push("The email field is required");
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/.test(email)) {
      msgs.push("Inform a Valid Email");
    }

    if (!password || !repeatPassword) {
      msgs.push("Type the password 2x");
    } else if (password !== repeatPassword) {
      msgs.push("The password doesn't match");
    }
    return msgs;
  };

  const register = async () => {
    const msgs = validate();

    if (msgs.length > 0) {
      msgs.forEach((msg, index) => {
        toast.error(msg, { theme: "colored" });
      });
      return false;
    }
    try {
      const response = await service.saveRegister({
        name: name,
        email: email,
        password: password,
      });
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
