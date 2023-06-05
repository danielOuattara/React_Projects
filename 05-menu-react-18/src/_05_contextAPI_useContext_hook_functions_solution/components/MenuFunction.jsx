import { SingleMenu } from "./";
import { useMenuContext } from "./../context/MenuContext";

export default function Menu() {
  const { menusToRender } = useMenuContext();
  return (
    <div className="section-center">
      {menusToRender.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
}
