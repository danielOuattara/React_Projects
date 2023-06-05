import { Component } from "react";
import MenuContextProvider from "./context/MenuContext";
import { MenuCategories, Menu } from "./components";
export default class AppClassContextAPI extends Component {
  render() {
    return (
      <MenuContextProvider>
        <main>
          <section className="menu section">
            <div className="title">
              <p>classes contextAPI solution</p>
              <h2>our menu</h2>
              <div className="underline"></div>
              <MenuCategories />
              <Menu />
            </div>
          </section>
        </main>
      </MenuContextProvider>
    );
  }
}
