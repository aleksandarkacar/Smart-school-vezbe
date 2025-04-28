import { DeleteOutlined } from "@ant-design/icons";

export default function TodoList({ todos, handleEraseTask }) {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo, i) => {
          return (
            <div className="todo-container">
              <li key={i} className="todo">
                {todo}
              </li>
              <DeleteOutlined
                onClick={() => {
                  handleEraseTask(i);
                }}
                className="erase-btn"
              />
            </div>
          );
        })}
      </ul>
    </>
  );
}
