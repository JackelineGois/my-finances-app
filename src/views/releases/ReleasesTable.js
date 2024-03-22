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
          {" "}
          <button
            type="button"
            onClick={(e) => props.edit(release)}
            className="btn btn-success"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={(e) => props.deleteRelease(release)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Description </th>
          <th scope="col">Value </th>
          <th scope="col">Type </th>
          <th scope="col">Month </th>
          <th scope="col">Situation </th>
          <th scope="col">Actions </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ReleasesTable;
