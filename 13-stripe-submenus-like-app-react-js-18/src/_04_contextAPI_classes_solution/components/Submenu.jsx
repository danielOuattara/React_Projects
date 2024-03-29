import { createRef, Component } from "react";
import { SubMenuContext } from "./../context/SubMenuContext";
//--------------------------------------------------------------

export default class Submenu extends Component {
  columns = "";
  static contextType = SubMenuContext;

  subMenuContainer = createRef(null);

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.subMenuLocation !== this.context.subMenuLocation ||
      prevProps.subMenuPageShown.links !== this.context.subMenuPageShown.links
    ) {
      this.context.subMenuPageShown.links.length === 2
        ? (this.columns = "col-3")
        : (this.columns = "col-4");

      this.subMenuContainer.current.style.left = `${this.context.subMenuLocation.subMenuCenterPosition}px`;
      this.subMenuContainer.current.style.top = `${this.context.subMenuLocation.subMenuTopPosition}px`;
    }
  }

  render() {
    const { isSubMenuOpen, subMenuPageShown } = this.context;
    return (
      <aside
        className={isSubMenuOpen ? "submenu show" : "submenu"}
        ref={this.subMenuContainer}
      >
        <h4>{subMenuPageShown.page}</h4>
        <div className={`submenu-center ${this.columns}`}>
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
  }
}
