import React from "react";
import UserService from "../app/service/UserService";
import { Link } from "react-router-dom";
import { AuthContext } from "../main/AuthenticationProvider";

class Home extends React.Component {
  static contextType = AuthContext;
  state = {
    balance: 0,
  };

  constructor() {
    super();
    this.UserService = new UserService();
  }

  componentDidMount() {
    const { authenticatedUser } = this.context;

    if (authenticatedUser) {
      const loginUser = authenticatedUser;

      this.UserService.getBalancePerUser(loginUser.id)
        .then((response) => {
          this.setState({ balance: response.data });
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This is your finance system.</p>
        <p className="lead">
          Your balance for the current month is $ {this.state.balance}
        </p>
        <hr className="my-4" />
        <p>
          And this is your administrative area, use one of the menus or buttons
          below to navigate the system.
        </p>
        <p className="lead">
          <Link
            to="/register-release"
            className="btn btn-danger btn-lg"
            role="button"
          >
            <i className="fa fa-users"></i> Register Releases
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
