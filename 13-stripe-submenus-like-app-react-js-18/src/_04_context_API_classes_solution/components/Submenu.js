import { createRef, Component } from "react";
import { AppContext } from "./../context/AppContext";
//--------------------------------------------------------------

export default class Submenu extends Component {
  state = {
    columns: "",
    localSubMenuPageShown: undefined,
    localSubMenuLocation: undefined,
  };

  subMenuContainer = createRef(null);

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.setLocalSubMenuLocation !== this.state.localSubMenuLocation ||
      prevState.localSubMenuPageShown.links !==
        this.state.localSubMenuPageShown?.links
    ) {
      this.state.localSubMenuPageShown?.links.length === 3
        ? this.setState((prevState) => ({ ...prevState, columns: "col-3" }))
        : this.setState((prevState) => ({ ...prevState, columns: "col-3" }));
      this.subMenuContainer.current.style.left = `${this.state.localSubMenuLocation?.subMenuCenterPosition}px`;
      this.subMenuContainer.current.style.top = `${this.state.localSubMenuLocation?.subMenuTopPosition}px`;
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { isSubMenuOpen, subMenuLocation, subMenuPageShown } = context;
          this.setState((prevState) => ({
            ...prevState,
            localSubMenuLocation: subMenuLocation,
          }));
          this.setState((prevState) => ({
            ...prevState,
            localSubMenuPageShown: subMenuPageShown,
          }));
          return (
            <aside
              className={isSubMenuOpen ? "submenu show" : "submenu"}
              ref={this.subMenuContainer}
            >
              <h4>{subMenuPageShown?.page}</h4>
              <div className={`submenu-center ${this.state.columns}`}>
                {subMenuPageShown.links.map((link, index) => {
                  return (
                    <a key={index} href={link.url}>
                      {link.icon} {link.label}
                    </a>
                  );
                })}
              </div>
            </aside>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
