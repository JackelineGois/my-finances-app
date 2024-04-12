import React from "react";
import currencyFormatter from "currency-formatter";

function ReleasesTable(props) {
  const rows = props.releases.map((release) => {
    return (
      <tr key={release.id}>
        <td>{release.description}</td>
        <td>{currencyFormatter.format(release.value, { locale: "de-DE" })}</td>
        <td>{release.type}</td>
        <td>{release.month}</td>
        <td>{release.status}</td>
        <td>
          <button
            type="button"
            onClick={(e) => props.updateStatus(release, "EFETIVADO")}
            className="btn btn-success"
            title="Efetivado"
            disabled={release.status !== "PENDENTE"}
          >
            <i className="pi pi-check"></i>
          </button>
          <button
            type="button"
            onClick={(e) => props.updateStatus(release, "CANCELADO")}
            className="btn btn-warning"
            title="Cancelado"
            disabled={release.status !== "PENDENTE"}
          >
            <i className="pi pi-times"></i>
          </button>
        </td>
        <td>
          {" "}
          <button
            type="button"
            onClick={(e) => props.edit(release.id)}
            className="btn btn-primary"
            title="Edit"
          >
            <i className="pi pi-pencil"></i>
          </button>
          <button
            type="button"
            onClick={(e) => props.deleteRelease(release)}
            className="btn btn-danger"
            title="Delete"
          >
            <i className="pi pi-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-hover ">
      <thead>
        <tr>
          <th scope="col">Description </th>
          <th scope="col">Value </th>
          <th scope="col">Type </th>
          <th scope="col">Month </th>
          <th scope="col">Situation </th>
          <th scope="col"> Update </th>
          <th scope="col"> Actions </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ReleasesTable;
