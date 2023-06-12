import { Component } from "react";
import { SingleColor } from "./";
import { connect } from "react-redux";

class ColorList extends Component {
  render() {
    return (
      <section className="colors">
        {this.props.list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              color={color}
              listLength={this.props.list.length}
            />
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.colorGeneratorState.list,
  };
};

export default connect(mapStateToProps, null)(ColorList);
