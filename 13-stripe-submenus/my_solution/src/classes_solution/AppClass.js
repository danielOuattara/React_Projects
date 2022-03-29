import React, { Component } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

export default class AppClass extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </>
    );
  }
}
