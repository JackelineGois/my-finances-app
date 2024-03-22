import React from "react";

function ReleasesTable(props) {
  const rows = props.releases.map((releases) => {
    return (
      <tr key={releases.id}>
        <td>{releases.description}</td>
        <td>{releases.value}</td>
        <td>{releases.type}</td>
        <td>{releases.month}</td>
        <td>{releases.status}</td>
        <td></td>
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
