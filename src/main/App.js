import React from "react";

import "../css/custom.css";

import "bootswatch/dist/flatly/bootstrap.css";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import FinancesRoute from "./routes";

class App extends React.Component {
  render() {
    return (
      <>
        <ToastContainer toastStyle={{ theme: "colored" }} />
        <Navbar />
        <div className="container">
          <FinancesRoute />
        </div>
      </>
    );
  }
}

export default App;
