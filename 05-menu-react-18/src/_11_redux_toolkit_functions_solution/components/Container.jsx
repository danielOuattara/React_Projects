import { Menu, MenuCategories } from "./";
import menusData from "./../../data";
import { useSelector } from "react-redux";

export default function Container() {
  const { category } = useSelector((state) => state.menus);
  const filteredMenu = menusData.filter((item) => item.category === category);
  const menusToRender = category === "all" ? menusData : filteredMenu;

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <p>redux toolkit + functions solution</p>
          <h2>our menu</h2>
          <div className="underline"></div>
          <MenuCategories />
          <Menu menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}
