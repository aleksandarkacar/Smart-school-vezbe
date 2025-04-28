import { useState } from "react";

export default function AddNewTask({ handleAddTask }) {
  const [newTask, setNewTask] = useState("");

  const changeNewTask = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter New Task Here..."
        value={newTask}
        onChange={changeNewTask}
      />
      <input
        type="button"
        value="Add Task"
        onClick={() => {
          handleAddTask(newTask);
          setNewTask("");
        }}
        className="btn"
      />
    </div>
  );
}
