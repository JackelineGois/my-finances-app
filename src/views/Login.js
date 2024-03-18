import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/Form-group";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  logIn = () => {
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
  };

  register = () => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ position: "relative", left: "300px" }}
          >
            <div className="bs-docs-section">
              <Card title="Login">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <FormGroup
                          label="Email: *"
                          htmlFor="exampleInputEmail1"
                        >
                          <input
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Type Your Email"
                          />
                        </FormGroup>
                        <FormGroup
                          label="Password *"
                          htmlFor=" exampleInputPassword1"
                        >
                          <input
                            value={this.state.password}
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Type your password"
                          />
                        </FormGroup>
                        <button
                          onClick={this.logIn}
                          className="btn btn-success"
                        >
                          {" "}
                          Log In
                        </button>
                        <button className="btn btn-danger"> Register</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
