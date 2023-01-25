import React, { useState } from "react";
import Menus from "./MenuFunction";
import ListCategories from "./ListCategoriesFunction";
import items from "../data";

function AppFunction() {
  // method 2: Much more easier and straith forward
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const [category, setCategory] = useState("all");

  const filteredMenus = items.filter((item) => item.category === category);

  const menusToRender = category === "all" ? items : filteredMenus;

  const showCategory = (category) => setCategory(() => category); // OK

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu (function solution)</h2>
          <div className="underline"></div>
          <ListCategories categories={categories} showCategory={showCategory} />
          <Menus menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}

export default AppFunction;
