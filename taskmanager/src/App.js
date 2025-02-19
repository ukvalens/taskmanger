import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './components/styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => t.id === taskToEdit.id ? { id: t.id, ...task } : t));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { id: Date.now(), ...task }]);
    }
  };

  const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    setTaskToEdit(task);
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task));
  };

  return (
    <div className="bg-gray min-h-screen p-8">
      <TaskForm onSubmit={addTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} onToggle={toggleStatus} />
    </div>
  );
};

export default App;
