import React, { useState } from "react";
import Menu from "./MenuFunction";
import ListCategories from "./ListCategoriesFunction";
import items from "./../data";

function AppFunction() {
  // method 1
  // const categories = items.reduce((categories, item) => {
  //   return categories.includes(item.category) ? categories : categories.concat(item.category)
  // }, []);
  // categories.unshift('all');

  //---------------------------------------------------

  // method 2: Much more easier and straith forward
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const [category, setCategory] = useState("all");
  const filteredMenus = items.filter((item) => item.category === category);
  const menusToRender = category === "all" ? items : filteredMenus;

  // const showCategory = (category) => {
  //     return setCategory(() => category);
  //   }

  // const showCategory = (category) => setCategory(() => category); // OK

  const showCategory = (category) => setCategory(category); // OK

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <ListCategories categories={categories} showCategory={showCategory} />
          <Menu menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}

export default AppFunction;
