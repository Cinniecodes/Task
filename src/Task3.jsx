import React from 'react'

function Task3({ task, onToggleTask, onDeleteTask}) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-2 rounded shadow">
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        className="mr-2"
      />
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.text}
      </span>
      <small className="text-sm text-gray-500 ml-2">({task.dueDate})</small>
    </div>
    <button
      onClick={() => onDeleteTask(task.id)}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  </div>
  )
}

export default Task3