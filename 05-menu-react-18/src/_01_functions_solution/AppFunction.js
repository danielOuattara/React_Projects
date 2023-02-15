import React, { useState } from "react";
import Menu from "./MenuFunction";
import MenuCategories from "./MenuCategoriesFunction";
import menuItems from "../data";

function AppFunction() {
  // method 2: Much more easier and straith forward
  const categories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];
  const [category, setCategory] = useState("all");
  const filteredMenu = menuItems.filter((item) => item.category === category);
  const menusToRender = category === "all" ? menuItems : filteredMenu;

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu (function solution)</h2>
          <div className="underline"></div>
          <MenuCategories categories={categories} setCategory={setCategory} />
          <Menu menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}

export default AppFunction;
