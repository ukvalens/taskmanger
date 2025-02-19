import React from 'react';
import './styles.css';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <div className="container">
      <h1 className="header">Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <h2 className={`text-xl ${task.status === 'Completed' ? 'line-through' : ''}`}>{task.title}</h2>
              <p className="text-sm text-gray-500">Description: {task.description}</p>
              <p className="text-sm text-gray-500">Priority: {task.priority}</p>
              <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
              <p className="text-sm text-gray-500">Status: {task.status}</p>
            </div>
            <div className="task-actions">
              <button onClick={() => onToggle(task.id)} className="button button-green">Toggle Status</button>
              <button onClick={() => onEdit(task.id)} className="button button-blue">Edit</button>
              <button onClick={() => onDelete(task.id)} className="button button-red">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
