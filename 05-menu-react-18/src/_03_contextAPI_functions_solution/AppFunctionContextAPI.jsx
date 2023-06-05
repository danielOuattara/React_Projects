import MenuContextProvider from "./context/MenuContext";
import { MenuCategories, Menu } from "./components";

export default function AppFunctionContextAPI() {
  return (
    <MenuContextProvider>
      <main>
        <section className="menu section">
          <div className="title">
            <p>functions contextAPI solution</p>
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
