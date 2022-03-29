import React, { Component } from 'react'
import ModalClass from "./ModalClass";
import SidebarClass from "./SidebarClass";
import HomeClass from "./HomeClass";


export default class App extends Component {
  render() {
    return (
      <>
        <HomeClass />
        <ModalClass />
        <SidebarClass />
      </>
    );
  }
}
