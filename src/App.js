import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import CompletedTasks from "./Component/CompletedTasks";
import NavBar from "./Component/NavBar";
function App() {
  return (
    <div className="App container-fluid">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/completed" element={<CompletedTasks />} />
      </Routes>
    </div>
  );
}

export default App;
