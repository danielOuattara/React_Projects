import { SingleColor } from "./";
import { connect } from "react-redux";

function ColorList(props) {
  const { list } = props;
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

const mapStateToProps = (state) => {
  return {
    list: state.colorGeneratorState.list,
  };
};

export default connect(mapStateToProps, null)(ColorList);
