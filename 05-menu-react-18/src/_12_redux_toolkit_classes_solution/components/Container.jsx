import React, { Component } from "react";
import { Menu, MenuCategories } from "./";
import menusData from "./../../data";
import { connect } from "react-redux";

class Container extends Component {
  render() {
    const filteredMenu = menusData.filter(
      (item) => item.category === this.props.category,
    );
    const menusToRender =
      this.props.category === "all" ? menusData : filteredMenu;

    return (
      <main>
        <section className="menu section">
          <div className="title">
            <p>redux toolkit + classes solution</p>
            <h2>our menu</h2>
            <div className="underline"></div>
            <MenuCategories />
            <Menu menusToRender={menusToRender} />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.menus.category,
  };
};

export default connect(mapStateToProps, null)(Container);
