import React, { Component } from "react";
import { AppContext } from "./ContextClass";

const container = React.createRef(null);
export default class Submenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: "col-2",
    };
  }

  static contextType = AppContext;

  componentDidUpdate(prevState, prevProps) {
    const {
      subMenuLocation,
      subMenuPageShown: { links },
    } = this.context;

    if (prevProps.subMenuLocation !== this.props.setSubMenuLocation) {
      links.length === 3
        ? this.setState({ columns: "col-3" })
        : this.setState({ columns: "col-4" });
      const subMenu = container.current;
      const { centerPosition, topPosition } = subMenuLocation;
      subMenu.style.left = `${centerPosition}px`;
      subMenu.style.top = `${topPosition}px`;
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const {
            subMenuOpen,
            subMenuPageShown: { links, page },
          } = context;

          return (
            <aside
              className={subMenuOpen ? "submenu show" : "submenu"}
              ref={container}
            >
              <h4>{page}</h4>
              <div className={`submenu-center ${this.state.columns}`}>
                {links.map((link, index) => {
                  const { icon, url, label } = link;
                  return (
                    <a key={index} href={url}>
                      {icon} {label}
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
