import { useState } from "react";
import { Menu, MenuCategories } from "./components";
import menuItems from "../data";

const categories = ["all", ...new Set(menuItems.map((item) => item.category))];

function AppFunction() {
  const [category, setCategory] = useState("all");
  const filteredMenu = menuItems.filter((item) => item.category === category);
  const menusToRender = category === "all" ? menuItems : filteredMenu;

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <p>functions solution</p>
          <h2>our menu</h2>
          <div className="underline"></div>
          <MenuCategories
            categories={categories}
            setCategory={setCategory}
            category={category}
          />
          <Menu menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}

export default AppFunction;
