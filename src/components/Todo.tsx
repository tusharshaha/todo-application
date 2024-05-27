import React from "react";

const Todo: React.FC = () => {
  return (
    <div className="bg-gray-300 h-screen pt-4">
      <div className="bg-white max-w-3xl rounded-md mx-auto p-3">
        <h1 className="text-center text-3xl font-bold">Todo List</h1>
        <div className="space-y-3">
          <p className="font-bold text-xl border-b">Add Item</p>
          <div className="flex items-center justify-between gap-3">
            <input
              type="text"
              placeholder="add item"
              className="border-2 py-2 px-6 rounded-md w-full"
              required
            />
            <button className="bg-green-600 btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
