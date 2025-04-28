import React from "react";

export default class InventorsTable extends React.Component {
  render() {
    console.log(this.props);
    return (
      <table className="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year of Birth</th>
            <th>Year of Death</th>
          </tr>
        </thead>
        <tbody>
          {this.props.inventors.map((inventor, i) => {
            return (
              <tr key={i}>
                <td>{inventor.first}</td>
                <td>{inventor.last}</td>
                <td>{inventor.year}</td>
                <td>{inventor.passed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
