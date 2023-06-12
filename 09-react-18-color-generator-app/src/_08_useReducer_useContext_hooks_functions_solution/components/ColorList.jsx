import { SingleColor } from "./";
import { useColorGeneratorContext } from "../context/ColorGeneratorContext";

export default function ColorList() {
  const { list } = useColorGeneratorContext();
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
