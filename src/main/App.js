import React from "react";

import "../css/custom.css";

import "bootswatch/dist/flatly/bootstrap.css";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

import FinancesRoute from "./routes";

class App extends React.Component {
  render() {
    return (
      <>
        <ToastContainer toastStyle={{ theme: "colored" }} />
        <Navbar />
        <Button label="Click" icon="pi pi-check" iconPos="right" />
        <div className="container">
          <FinancesRoute />
        </div>
      </>
    );
  }
}

export default App;
