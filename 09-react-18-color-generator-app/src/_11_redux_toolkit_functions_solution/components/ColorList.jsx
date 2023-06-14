import { SingleColor } from "./";
import { useSelector } from "react-redux";

export default function ColorList() {
  const { list } = useSelector((state) => state.colorGeneratorState);
  return (
    <section className="colors">
      {list.map((color, index) => {
        return (
          <SingleColor
            key={index}
            index={index}
            color={color}
            listLength={list.length}
          />
        );
      })}
    </section>
  );
}
