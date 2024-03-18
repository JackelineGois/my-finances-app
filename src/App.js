import React from "react";
import Login from "./views/Login";
import "./css/custom.css";

import "bootswatch/dist/flatly/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
