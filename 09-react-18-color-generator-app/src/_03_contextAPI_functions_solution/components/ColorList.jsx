import { SingleColor } from "./";
import { ColorGeneratorContext } from "../context/ColorGeneratorContext";

export default function ColorList() {
  return (
    <ColorGeneratorContext.Consumer>
      {(context) => {
        return (
          <section className="colors">
            {context.list.map((color, index) => {
              return (
                <SingleColor
                  key={index}
                  index={index}
                  color={color}
                  listLength={context.list.length}
                />
              );
            })}
          </section>
        );
      }}
    </ColorGeneratorContext.Consumer>
  );
}
