import menusData from "./../data";
import { useReducer } from "react";
import menuReducer from "./reducer/menus/menusReducer";
import { selectCategory } from "./reducer/menus/menusAction";
import { MenuCategories, Menu } from "./components";

const categories = ["all", ...new Set(menusData.map((item) => item.category))];

const menuInitialState = {
  category: "all",
  categories,
};

export default function AppFunctionUseReducer() {
  const [menusState, dispatchMenu] = useReducer(menuReducer, menuInitialState);

  const filteredMenu = menusData.filter(
    (item) => item.category === menusState.category,
  );
  const menusToRender =
    menusState.category === "all" ? menusData : filteredMenu;

  const handleSwitchCategory = (name) => {
    dispatchMenu(selectCategory(name));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <p>useReducer solution</p>
          <h2>our menu </h2>
          <div className="underline"></div>

          <MenuCategories
            categories={menusState.categories}
            category={menusState.category}
            handleSwitchCategory={handleSwitchCategory}
          />
          <Menu menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}
