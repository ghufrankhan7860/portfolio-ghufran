import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ProjectTemplate from "./pages/ProjectTemplate";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:project_id" element={<ProjectTemplate />} /> */}
      </Routes>
    </>
  );
};

export default App;
