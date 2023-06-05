import { SingleMenu } from "./";

export default function Menu(props) {
  return (
    <div className="section-center">
      {props.menusToRender.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
}
