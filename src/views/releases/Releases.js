import { useState } from "react";
import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/Form-group";
import SelectMenu from "../../components/SelectMenu";
import ReleasesTable from "./ReleasesTable";
import LocalStorageService from "../../app/service/LocalStorageService";
import ReleasesService from "../../app/service/ReleasesService";
import { toast } from "react-toastify";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";

function Releases() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [release, setRelease] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState({});

  const service = new ReleasesService();
  const navigate = useNavigate();

  const months = service.obtainListMoths();
  const types = service.obtainListsTypes();

  const search = () => {
    if (!year) {
      toast.error("The year field is required!", { theme: "colored" });
    } else {
      const loginUser = LocalStorageService.obtainItem("user_login");
      const filterReleases = {
        year: year,
        month: month,
        type: type,
        description: description,
        user: loginUser.id,
      };
      service
        .search(filterReleases)
        .then((response) => {
          if (response.data.length === 0) {
            toast.warning("There is no data for this research", {
              theme: "colored",
            });
          } else {
            setRelease(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const openConfirm = (releases) => {
    setConfirmDelete(releases);
    setShowConfirmDialog(true);
  };

  const cancelDeleteRelease = () => {
    setShowConfirmDialog(false, { confirmDelete: {} });
  };

  const edit = (id) => {
    navigate("/register-release/" + id, { replace: true });
  };

  const confirmDialogFooter = () => {
    return (
      <>
        <div>
          <Button
            label="No"
            icon="pi pi-times"
            onClick={() => cancelDeleteRelease()}
            className="p-button-text"
          />
          <Button
            label="Confirm"
            icon="pi pi-check"
            onClick={() => {
              deleteRelease();
              setShowConfirmDialog(false);
            }}
            autoFocus
          />
        </div>
      </>
    );
  };

  const deleteRelease = () => {
    service
      .releaseDelete(confirmDelete.id)
      .then((response) => {
        const updatedReleases = release.filter(
          (r) => r.id !== confirmDelete.id
        );
        setRelease(updatedReleases);
        toast.success("Release deleted with success ");
      })
      .catch((error) => {
        toast.error("Error to try to delete a Release");
      });
  };

  const registerFormReleases = () => {
    navigate("/register-releases", { replace: true });
  };

  return (
    <div>
      <Card title="Consultations Releases">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-component">
              <FormGroup label="Year *" htmlfor="inputYear">
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

              <FormGroup label="Description" htmlfor="inputDescription">
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                  id="inputYear"
                  placeholder="Type Year "
                ></input>
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
              <button
                type="button"
                className="btn btn-danger"
                onClick={registerFormReleases}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <ReleasesTable
                releases={release}
                edit={edit}
                deleteRelease={openConfirm}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Dialog
              header="Confirm Delete"
              visible={showConfirmDialog}
              style={{ width: "50vw" }}
              modal={true}
              onHide={() => setShowConfirmDialog(false)}
              footer={confirmDialogFooter}
            >
              <p className="m-0">Do you really want to delete the release?</p>
            </Dialog>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Releases;
