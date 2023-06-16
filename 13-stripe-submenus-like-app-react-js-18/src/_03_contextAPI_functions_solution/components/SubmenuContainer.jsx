import Submenu from "./Submenu";
import { SubMenusContext } from "./../context/SubMenusContext";
//--------------------------------------------------------------

export default function SubmenuContainer() {
  return (
    <SubMenusContext.Consumer>
      {(context) => {
        const { isSubMenuOpen, subMenuLocation, subMenuPageShown } = context;

        return (
          <Submenu
            isSubMenuOpen={isSubMenuOpen}
            subMenuLocation={subMenuLocation}
            subMenuPageShown={subMenuPageShown}
          />
        );
      }}
    </SubMenusContext.Consumer>
  );
}
