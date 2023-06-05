import { SingleMenu } from "./";
import { MenuContext } from "./../context/MenuContext";

export default function Menu() {
  return (
    <MenuContext.Consumer>
      {(context) => (
        <div className="section-center">
          {context.menusToRender.map((menu) => (
            <SingleMenu key={menu.id} {...menu} />
          ))}
        </div>
      )}
    </MenuContext.Consumer>
  );
}
