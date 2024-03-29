/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/Form-group";
import ReleasesService from "../../app/service/ReleasesService";
import SelectMenu from "../../components/SelectMenu";
import LocalStorageService from "../../app/service/LocalStorageService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function RegisterReleases() {
  const [data, setData] = useState({
    id: "",
    month: "",
    type: "",
    description: "",
    year: "",
    value: "",
    status: "",
    update: false,
  });
  const { id } = useParams();

  const service = new ReleasesService();
  const navigate = useNavigate();

  const types = service.obtainListsTypes();
  const months = service.obtainListMoths();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case "type":
        setData({ ...data, type: value });
        break;
      case "month":
        setData({ ...data, month: value });
        break;
      case "description":
        setData({ ...data, description: value });
        break;
      case "value":
        setData({ ...data, value: value });
        break;
      case "year":
        setData({ ...data, year: value });
        break;
      case "status":
        setData({ ...data, status: value });
        break;
      default:
        break;
    }
  };

  const submit = async () => {
    const loginUser = LocalStorageService.obtainItem("user_login");
    try {
      await service.save({
        description: data.description,
        year: data.year,
        month: data.month,
        value: data.value,
        type: data.type,
        user: loginUser.id,
      });
      toast.success("The Release was registered successfully");
      navigate("/consultation-releases", { replace: true });
    } catch (erro) {
      toast.error(erro.response.data, { theme: "colored" });
    }
  };

  const cancel = () => {
    navigate("/consultation-releases", { replace: true });
  };

  const fetchData = useCallback(async () => {
    try {
      await axios
        .get("http://localhost:8080/api/releases/" + id)
        .then((res) => setData(res.data, { update: true }))
        .catch((err) => console.log(err));
    } catch (error) {
      toast.warning(error.message, {
        theme: "colored",
      });
    }
  }, [id]);

  const submitUpdate = async () => {
    try {
      await service.update(data);
      toast.success("Data updated succes successfully", {
        theme: "colored",
      });
      navigate("/consultation-releases", { replace: true });
    } catch (error) {
      toast.error(error.response.data, {
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Card title={this.state.update ? "Update Releases" : "Register Releases"}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup id="inputDescription" label="Description *">
            <input
              type="text"
              id="inputDescription"
              className="form-control"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputYear" label="Year *">
              <input
                type="text"
                id="inputYear"
                className="form-control"
                name="year"
                value={data.year}
                onChange={handleChange}
              />
            </FormGroup>
          </div>

          <div className="col-md-6">
            <FormGroup id="inputMonth" label="Month *">
              <SelectMenu
                name="month"
                value={data.month}
                onChange={handleChange}
                id="inputMonth"
                className="form-control"
                list={months}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <FormGroup id="inputValue" label="Value *">
            <input
              type="text"
              id="inputValue"
              className="form-control"
              name="value"
              value={data.value}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="col-md-4">
          <FormGroup id="inputType" label="Type *">
            <SelectMenu
              name="type"
              value={data.type}
              onChange={handleChange}
              id="inputType"
              className="form-control"
              list={types}
            />
          </FormGroup>
        </div>

        <div className="col-md-4">
          <FormGroup id="inputStatus" label="Status">
            <input
              name="status"
              value={data.status}
              type="text"
              id="inputValue"
              className="form-control"
              disabled
            />
          </FormGroup>
        </div>
      </div>
      <br></br>

      <div className="col-md-6"> </div>
      <button onClick={submit} className="btn btn-success">
        {" "}
        Save
      </button>
      <button onClick={submitUpdate} className="btn btn-success">
        update
      </button>
      <button className="btn btn-danger" onClick={cancel}>
        Cancel{" "}
      </button>
    </Card>
  );
}

export default RegisterReleases;
