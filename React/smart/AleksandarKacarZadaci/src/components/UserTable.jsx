import React from "react";

export default class UserTable extends React.Component {
  render() {
    return (
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year of birth</th>
            <th>Year of passing</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((student, i) => {
            return (
              <tr key={i}>
                <td>
                  {student.firstName} {student.lastName}
                </td>
                <td>{student.year}</td>
                <td>{student.mark}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
