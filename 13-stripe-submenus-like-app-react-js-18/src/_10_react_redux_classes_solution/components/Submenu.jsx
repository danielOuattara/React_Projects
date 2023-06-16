import { createRef, Component } from "react";
import { connect } from "react-redux";

//--------------------------------------------------------------

class Submenu extends Component {
  state = {
    columns: "",
  };

  subMenuContainer = createRef(null);

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.subMenuLocation !== this.props.subMenuLocation ||
      prevProps.subMenuPageShown.links !== this.props.subMenuPageShown.links
    ) {
      this.props.subMenuPageShown.links.length <= 3
        ? this.setState((prevState) => ({ ...prevState, columns: "col-3" }))
        : this.setState((prevState) => ({ ...prevState, columns: "col-4" }));
      this.subMenuContainer.current.style.left = `${this.props.subMenuLocation.subMenuCenterPosition}px`;
      this.subMenuContainer.current.style.top = `${this.props.subMenuLocation.subMenuTopPosition}px`;
    }
  }

  render() {
    return (
      <aside
        className={this.props.isSubMenuOpen ? "submenu show" : "submenu"}
        ref={this.subMenuContainer}
      >
        <h4>{this.props.subMenuPageShown.page}</h4>
        <div className={`submenu-center ${this.state.columns}`}>
          {this.props.subMenuPageShown.links.map((link, index) => {
            return (
              <a key={index} href={link.url}>
                {link.icon} {link.label}
              </a>
            );
          })}
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSubMenuOpen: state.stripeSubMenusState.isSubMenuOpen,
    subMenuLocation: state.stripeSubMenusState.subMenuLocation,
    subMenuPageShown: state.stripeSubMenusState.subMenuPageShown,
  };
};

export default connect(mapStateToProps, null)(Submenu);
