import React, { useState } from 'react'
import Task1 from './Task1'
import Task2 from './Task2'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  let [tasks, setTasks] = useState([]);
  let [filter,setFilter] = useState("all")

  let addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
    toast.success("Task added successfully!");
  };

  let toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    toast.info("Task updated!");
  };

  let deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error("Task deleted!");
  };

  let reorderTasks = (list,startIndex, endIndex) => {
    const reordered = [...list];
    const [removed] = reordered.splice(startIndex, 1);
    reordered.splice(endIndex, 0, removed);
    return reordered;
  };
  const handleDragEnd = (result) => {
    if (!result.destination) return; 
    const filteredTasks = getFilteredTasks();
    const reorderedTasks = reorderTasks(
      filteredTasks,
      result.source.index,
      result.destination.index
    );
    const newTasks = tasks.map((task) => {
      const reorderedTask = reorderedTasks.find((t) => t.id === task.id);
      return reorderedTask || task;
    });
    setTasks(newTasks);
  };
  const getFilteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "uncompleted") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks; 
  };

  return (
    <div className="min-h-screen bg-gray-300 p-4 flex justify-center items-center">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg  p-4">
      <h1 className="text-2xl font-bold mb-4 ml-8">Task Management App💻</h1>
      <Task1 onAddTask={addTask} />
      <div className="flex items-center mb-4">
      <div className="block text-gray-700 mb-2 font-semibold">Filter Tasks:</div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed Tasks</option>
            <option value="uncompleted">Uncompleted Tasks</option>
          </select>
      </div>
        
      <Task2
        tasks={getFilteredTasks()}
        onToggleTask={toggleTaskCompletion}
        onDeleteTask={deleteTask}
        onDragEnd={handleDragEnd}
      />
    </div>
    <ToastContainer />
  </div>
    
  )
}

export default App