import React, { useState } from 'react'

function Task1({ onAddTask}) {
  let [task, setTask] = useState("");
  let [dueDate, setDueDate] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && dueDate) {
      onAddTask({ text: task.trim(), dueDate });
      setTask("");
      setDueDate("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        className="p-2 border rounded mb-2 focus:outline-none shadow-xl"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 border rounded mb-2 focus:outline-none shadow-xl"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 "
      >
        Add
      </button>
    </form>
    </div>
  )
}

export default Task1