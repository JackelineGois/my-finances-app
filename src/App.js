import React from "react";
//import Login from "./views/Login";
import "./css/custom.css";

import "bootswatch/dist/flatly/bootstrap.css";
import RegisterUser from "./views/registerUser";

class App extends React.Component {
  render() {
    return (
      <div>
        <RegisterUser />
      </div>
    );
  }
}

export default App;
