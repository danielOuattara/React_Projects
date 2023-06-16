import { Component } from "react";
import { FaTimes } from "react-icons/fa";
import subLinks from "../../data";
import { connect } from "react-redux";
import { toggleSideBar } from "./../redux/stripeSubMenus/stripeSubMenusActions";

class Sidebar extends Component {
  render() {
    return (
      <aside
        className={
          this.props.isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
        }
      >
        <div className="sidebar">
          <button
            className="close-btn"
            onClick={() => this.props.handleToggleSideBar(false)}
          >
            <FaTimes />
          </button>
          <div className="sub-links">
            {subLinks.map((item, index) => {
              return (
                <article key={index}>
                  <h4>{item.page}</h4>
                  <div className="sidebar-sub-links">
                    {item.links.map((subItem, subIndex) => {
                      return (
                        <a key={subIndex} href={subItem.url}>
                          {subItem.icon}
                          {subItem.label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSideBarOpen: state.stripeSubMenusState.isSideBarOpen };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSideBar: (bool) => {
      return dispatch(toggleSideBar(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
