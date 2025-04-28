import React from "react";

export default function TodosList({ todos }) {
  console.log("From Todoslist", todos);
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.userId === b.userId) {
      return a.completed - b.completed;
    }
  });
  console.log("sortedTodos", sortedTodos);
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>UserID</th>
          <th>Title</th>
          <th>☑</th>
        </tr>
      </thead>
      <tbody>
        {sortedTodos.map((todo, i) => {
          return (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td className={todo.completed ? "done" : "notDone"}>
                {todo.completed ? "✔" : "✘"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
