import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
  priority: "high" | "normal" | "low";
  isEditing: boolean;
}

export const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [priority, setPriority] = useState<"high" | "normal" | "low">("normal");

  const addTask = () => {
    const newId = tasks.length + 1;
    setTasks([
      ...tasks,
      { id: newId, text: newTask, priority, isEditing: false },
    ]);
    setNewTask("");
    setPriority("normal");
  };

  const removeTask = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const startEditTask = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, isEditing: true } : task
      )
    );
  };

  const saveTask = (taskId: number, newText: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as "high" | "normal" | "low");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full"
          placeholder="Add a new task"
        />
       <select
      value={priority}
      onChange={handlePriorityChange}
      className="border p-2"
    >
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 mb-2 rounded ${
              task.priority === "high"
                ? "bg-red-200"
                : task.priority === "normal"
                ? "bg-yellow-200"
                : "bg-green-200"
            }`}
          >
            {task.isEditing ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => saveTask(task.id, e.target.value)}
                className="border p-2 w-full"
              />
            ) : (
              <span>{task.text}</span>
            )}
            <div>
              <button
                onClick={() => startEditTask(task.id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
