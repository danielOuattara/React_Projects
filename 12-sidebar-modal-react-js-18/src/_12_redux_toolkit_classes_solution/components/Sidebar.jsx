import { Component } from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { sidebarActions } from "../redux/sidebar/sidebar-slice";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    return (
      <aside
        className={
          this.props.isSidebarOpen ? "sidebar show-sidebar" : "sidebar"
        }
      >
        <div className="sidebar-header">
          <div className="neutral">
            <p>redux toolkit classes solution</p>
            <img src={logo} alt="coding addict" className="logo" />
            <button
              className="close-btn"
              onClick={() => this.props.handleToggleSidebar()}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <ul className="links">
          {links.map((item) => (
            <li key={item.id}>
              {" "}
              <a href={item.url}>
                {item.icon}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSidebarOpen: state.sidebarState.isSidebarOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSidebar() {
      return dispatch(sidebarActions.toggleSidebar());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
