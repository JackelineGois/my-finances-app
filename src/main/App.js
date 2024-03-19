import React from "react";

import "../css/custom.css";

import "bootswatch/dist/flatly/bootstrap.css";
import Navbar from "../components/Navbar";

import FinancesRoute from "./routes";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <FinancesRoute />
        </div>
      </>
    );
  }
}

export default App;
