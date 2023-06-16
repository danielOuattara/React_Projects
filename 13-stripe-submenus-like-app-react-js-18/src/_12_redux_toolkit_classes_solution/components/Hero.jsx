import { Component } from "react";
import phoneImg from "./../../images/phone.svg";
import { connect } from "react-redux";
import { stripeSubMenusSliceActions } from "./../redux/stripeSubMenus/stripeSubMenus-slice";
//--------------------------------------------------------------

class Hero extends Component {
  render() {
    return (
      <section
        className="hero"
        onMouseOver={() => this.props.handleToggleSubMenu(false)}
      >
        <div className="hero-center">
          <article className="hero-info">
            <p className="title">redux toolkit classes solution</p>
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, voluptates. Maxime beatae iure corrupti ducimus quos,
              officiis doloremque dolores incidunt quam rem excepturi harum
              culpa nemo at quo aut natus.
            </p>
            <button className="btn">Start now</button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} className="phone-img" alt="phone logo" />
          </article>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSubMenu: (bool) => {
      return dispatch(stripeSubMenusSliceActions.toggleSubMenu(bool));
    },
  };
};

export default connect(null, mapDispatchToProps)(Hero);
