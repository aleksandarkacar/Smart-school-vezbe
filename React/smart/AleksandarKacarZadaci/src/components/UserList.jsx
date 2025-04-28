import React from "react";

export default function UserList({ users }) {
  // console.log("From userlist", users);
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>UserID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => {
          return (
            <tr key={user.id}>
              <td>{user.userId}</td>
              <td>{user.title}</td>
              <td>{user.completed ? "✔✔" : ""}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
