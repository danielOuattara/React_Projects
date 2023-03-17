import { Component } from "react";
import { AppContext } from "./../context/AppContext";
import phoneImg from "./../../images/phone.svg";
//--------------------------------------------------------------

export default class Hero extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <section
            className="hero"
            onMouseOver={() => context.setIsSubMenuOpen(false)}
          >
            <div className="hero-center">
              <article className="hero-info">
                <h1>Payments infrastructure for the internet</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, voluptates. Maxime beatae iure corrupti ducimus
                  quos, officiis doloremque dolores incidunt quam rem excepturi
                  harum culpa nemo at quo aut natus.
                </p>
                <button className="btn">Start now</button>
              </article>
              <article className="hero-images">
                <img src={phoneImg} className="phone-img" alt="phone logo" />
              </article>
            </div>
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}
