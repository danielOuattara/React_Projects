import React, { Component } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import AppContextProviderClass from "./ContextClass";

export default class AppClass extends Component {
  render() {
    return (
      <AppContextProviderClass>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppContextProviderClass>
    );
  }
}
