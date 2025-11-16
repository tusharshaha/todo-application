import React, { useState } from "react";
import { TodoData } from "../types/todoTypes";

interface Props {
  task: boolean;
  todos: TodoData[];
  setTodos: React.Dispatch<React.SetStateAction<TodoData[]>>;
  setTodoStore: (todos: TodoData[]) => void;
}

const TodoList: React.FC<Props> = ({ task, todos, setTodos, setTodoStore }) => {
  const [todo, setTodo] = useState("");

  const handleEdit = (id: string) => {
    const oldTodos = [...todos];
    const editedTodos = oldTodos.map((ele) => {
      if (ele.id === id) {
        ele.edit = true;
      }
      return ele;
    });
    setTodos(editedTodos);
    setTodoStore(editedTodos);
  };
  const handleComplete = (id: string) => {
    const oldTodos = [...todos];
    const editedTodos = oldTodos.map((ele) => {
      if (ele.id === id) {
        ele.edit = false;
        ele.completed = !ele.completed;
      }
      return ele;
    });
    setTodos(editedTodos);
    setTodoStore(editedTodos);
  };
  const handleSave = (id: string) => {
    const oldTodos = [...todos];
    const editedTodos = oldTodos.map((ele) => {
      if (ele.id === id) {
        ele.edit = false;
        ele.todo = todo;
      }
      return ele;
    });
    setTodos(editedTodos);
    setTodoStore(editedTodos);
  };
  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((ele) => ele.id !== id);
    setTodos(updatedTodos);
    setTodoStore(updatedTodos);
  };
  return (
    <>
      {todos
        .filter((ele) => (task ? ele.completed : !ele.completed))
        .map((ele) => (
          <div key={ele.id} className="flex items-center justify-between gap-3">
            <input
              type="checkbox"
              onChange={() => handleComplete(ele.id)}
              checked={ele.completed}
            />
            <input
              type="text"
              value={(ele.edit && todo) || ele.todo}
              onChange={(e) => setTodo(e.target.value)}
              disabled={!ele.edit}
              placeholder="add item"
              className={`${ele.edit ? "border-2 py-2 px-6" : !ele.edit && ele.completed ? "line-through" : "border-none"}  focus:outline-none text-xl rounded-md w-full`}
              required
            />
            {ele.edit ? (
              <button
                onClick={() => handleSave(ele.id)}
                className="bg-green-600 btn"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(ele.id)}
                className="bg-sky-600 btn"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => handleDelete(ele.id)}
              className="bg-red-600 btn"
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default TodoList;
