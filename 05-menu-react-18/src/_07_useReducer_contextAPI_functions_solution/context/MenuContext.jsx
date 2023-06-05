import { createContext, useReducer } from "react";
import menusData from "./../../data";
import menuReducer from "./../reducer/menus/menusReducer";
import { selectCategory } from "./../reducer/menus/menusAction";

export const MenuContext = createContext();

const categories = ["all", ...new Set(menusData.map((item) => item.category))];

const menuInitialState = {
  category: "all",
  categories,
};

export default function MenuContextProvider(props) {
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
    <MenuContext.Provider
      value={{
        categories: menusState.categories,
        category: menusState.category,
        handleSwitchCategory,
        menusToRender,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
