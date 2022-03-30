import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import AppContextProviderFunction from "../functions_solution/ContextFunction";
function App() {
  return (
    <AppContextProviderFunction>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppContextProviderFunction>
  );
}

export default App;
