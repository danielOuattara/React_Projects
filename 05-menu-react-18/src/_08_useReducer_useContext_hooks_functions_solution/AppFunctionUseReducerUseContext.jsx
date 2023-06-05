import { MenuCategories, Menu } from "./components";
import MenuContextProvider from "./context/MenuContext";
export default function AppFunctionUseReducerUseContext() {
  return (
    <MenuContextProvider>
      <main>
        <section className="menu section">
          <div className="title">
            <p>useReducer + context API functions solution</p>
            <h2>our menu </h2>
            <div className="underline"></div>

            <MenuCategories />
            <Menu />
          </div>
        </section>
      </main>
    </MenuContextProvider>
  );
}
