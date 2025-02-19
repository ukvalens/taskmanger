import React, { useState, useEffect } from 'react';
import '../components/styles.css'; // Adjust the path if styles.css is not in the same directory

const TaskForm = ({ onSubmit, taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.dueDate);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!priority.trim()) newErrors.priority = 'Priority is required';
    if (!dueDate.trim()) newErrors.dueDate = 'Due Date is required';
    if (!status.trim()) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit({ title, description, priority, dueDate, status });
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDueDate('');
    setStatus('Pending');
    setErrors({});
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#signout">Signout</a></li>
          </ul>
        </nav>
      </aside>
      <form onSubmit={handleSubmit} className="container">
        <h1 className="header">{taskToEdit ? 'Edit Task' : 'Add Task'}</h1>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority}</p>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input"
          />
          {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
        </div>
        <button type="submit" className="button button-blue w-full">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
        {taskToEdit && (
          <button type="button" onClick={clearEdit} className="button button-red w-full mt-2">Cancel Edit</button>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
