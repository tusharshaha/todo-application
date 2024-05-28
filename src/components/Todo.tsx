import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { TodoData } from "../types/todoTypes";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [todo, setTodo] = useState("");

  // set todo to localStorage
  const setTodoStore = (todos: TodoData[]) => {
    const todoString = JSON.stringify(todos);
    localStorage.setItem("todos", todoString);
  };

  // get items from localStorage
  useEffect(() => {
    const storeTodo = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storeTodo);
  }, []);
  
  const handleAddTodo = () => {
    if (!todo) return;
    const newTodo = [
      { id: crypto.randomUUID(), completed: false, edit: false, todo },
      ...todos,
    ];
    setTodos(newTodo);
    setTodoStore(newTodo);
    setTodo("");
  };
  return (
    <div className="bg-gray-300 h-screen pt-4">
      <div className="bg-white max-w-3xl rounded-md mx-auto p-3">
        <h1 className="text-center text-3xl font-bold">Todo List</h1>

        {/* add todo action  */}
        <div className="space-y-3">
          <p className="font-bold text-xl border-b">Add Item</p>
          <div className="flex items-center justify-between gap-3">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="add item"
              className="border-2 py-2 px-6 rounded-md w-full"
              required
            />
            <button onClick={handleAddTodo} className="bg-green-600 btn">
              Add
            </button>
          </div>
        </div>

        {/* list of todos */}
        <div className="space-y-3 mt-5">
          <p className="font-bold text-xl border-b">Todo</p>
          <TodoList
            task={false}
            todos={todos}
            setTodos={setTodos}
            setTodoStore={setTodoStore}
          />
        </div>

        {/* completed todo list  */}
        <div className="space-y-3 mt-5">
          <p className="font-bold text-xl border-b">Completed Todo</p>
          <TodoList
            task={true}
            todos={todos}
            setTodos={setTodos}
            setTodoStore={setTodoStore}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
