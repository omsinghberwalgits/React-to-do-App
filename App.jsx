import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 border rounded p-2"
            placeholder="Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border rounded ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <span
                className={`flex-1 cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleComplete(index)}
              >
                {task.text}
              </span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
