import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
    </Routes>
  );
}

export default App;
