import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/Form-group";

class RegisterUser extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  register = () => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.repeatPassword);
  };

  render() {
    return (
      <div className="container">
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
                    name="name"
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup label="Email *" htmlFor="inputEmail">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    name="email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup label="Password *" htmlFor="inputPassword">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    name="password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup
                  label="Repet Password *"
                  htmlFor="inputRepeatPassword"
                >
                  <input
                    type="password"
                    id="inputRepeatPassword"
                    className="form-control"
                    name="password"
                    onChange={(e) => {
                      this.setState({
                        repeatPassword: e.target.value,
                      });
                    }}
                  />
                </FormGroup>
                <button
                  onClick={this.register}
                  type="button"
                  className="btn btn-success"
                >
                  Save
                </button>
                <button type="button" className="btn btn-danger">
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
}

export default RegisterUser;
