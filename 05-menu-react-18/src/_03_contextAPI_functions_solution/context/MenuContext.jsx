import { createContext, useState } from "react";
import menuItems from "./../../data";

export const MenuContext = createContext();

const categories = ["all", ...new Set(menuItems.map((item) => item.category))];

export default function MenuContextProvider(props) {
  const [category, setCategory] = useState("all");
  const filteredMenu = menuItems.filter((item) => item.category === category);
  const menusToRender = category === "all" ? menuItems : filteredMenu;

  return (
    <MenuContext.Provider
      value={{ categories, category, setCategory, menusToRender }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
