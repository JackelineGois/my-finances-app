import { useState } from "react";
import React from "react";
//import { Navigate } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/Form-group";
import SelectMenu from "../../components/SelectMenu";
import ReleasesTable from "./ReleasesTable";
import LocalStorageService from "../../app/service/LocalStorageService";
import ReleasesService from "../../app/service/ReleasesService";

function Releases() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [type, setType] = useState("");
  const [releases, setReleases] = [];
  const service = new ReleasesService();

  const months = [
    { label: "Select", value: "" },
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ];

  const types = [
    { label: "Select..", value: "" },
    { label: "Despesa", value: "DESPESA" },
    { label: "Receita", value: "RECEITA" },
  ];

  const search = () => {
    const loginUser = LocalStorageService.obtainItem("user_login");
    const filterReleases = {
      year: year,
      month: month,
      type: type,
      user: loginUser.id,
    };
    service
      .search(filterReleases)
      .then((response) => {
        setReleases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Card title="Consultations Releases">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-component">
              <FormGroup label="Year" htmlfor="inputYear">
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  type="text"
                  className="form-control"
                  id="inputYear"
                  placeholder="Type Year "
                ></input>
              </FormGroup>

              <FormGroup label="Month" htmlfor="inputMonth">
                <SelectMenu
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  id="inputMonth"
                  className="form-control"
                  list={months}
                />
              </FormGroup>
              <FormGroup label="Type of Releases" htmlfor="inputType">
                <SelectMenu
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  id="inputType"
                  className="form-control"
                  list={types}
                />
              </FormGroup>
              <br></br>
              <button
                type="button"
                onClick={search}
                className="btn btn-success"
              >
                Search
              </button>
              <button type="button" className="btn btn-danger">
                Register
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <ReleasesTable releases={releases} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Releases;
