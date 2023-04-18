import { Component } from "react";
import { Outlet } from "react-router-dom";

export default class RootLayout extends Component {
  render() {
    return (
      <main>
        <Outlet />;
      </main>
    );
  }
}
