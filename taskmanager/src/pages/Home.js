// src/pages/Home.js
import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const fetchTasks = () => {
    setRefresh(!refresh); // Toggle refresh state to force re-render
  };

  return (
    <div className="container mx-auto p-4">
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList />
    </div>
  );
};

export default Home;