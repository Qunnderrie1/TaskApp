import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import CompletedTasks from "./Component/CompletedTasks";
import NavBar from "./Component/NavBar";
import NotFound404 from "./Component/NotFound404";
function App() {
  return (
    <div className="App container-fluid">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TaskApp" element={<Home />} />
        <Route path="/tasks/completed" element={<CompletedTasks />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
