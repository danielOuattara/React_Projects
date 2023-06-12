import { SingleColor } from "./";

export default function ColorList(props) {
  return (
    <section className="colors">
      {props.list.map((color, index) => {
        return (
          <SingleColor
            key={index}
            index={index}
            color={color}
            listLength={props.list.length}
          />
        );
      })}
    </section>
  );
}
