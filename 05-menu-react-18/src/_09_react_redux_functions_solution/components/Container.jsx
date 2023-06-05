import { Menu, MenuCategories } from "./";
import menusData from "./../../data";
import { connect } from "react-redux";

function Container(props) {
  const filteredMenu = menusData.filter(
    (item) => item.category === props.category,
  );
  const menusToRender = props.category === "all" ? menusData : filteredMenu;

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <p>redux + functions solution</p>
          <h2>our menu</h2>
          <div className="underline"></div>
          <MenuCategories />
          <Menu menusToRender={menusToRender} />
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.menus.category,
  };
};

export default connect(mapStateToProps, null)(Container);
