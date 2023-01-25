import React from "react";
import SingleMenu from "./SingleMenuFunction";

const Menu = ({ menusToRender }) => {
  return (
    <div className="section-center">
      {menusToRender.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
};

export default Menu;
