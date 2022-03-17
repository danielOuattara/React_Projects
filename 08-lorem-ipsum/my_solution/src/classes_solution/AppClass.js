import React, { Component } from "react";
import data from "./../data";



export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfParagraph: 0,
      text: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => ({
      text: data.slice(0, this.state.numberOfParagraph),
    }));
  };

  render() {
    return (
      <section className="section-center">
        <h3>tired of boring lorem ipsum ?</h3>

        <form className="lorem-form" onSubmit={this.handleSubmit}>
          <label htmlFor="numbParagraph">paragraph ?</label>
          <input
            id="numbParagraph"
            type="number"
            min="0"
            max={data.length}
            value={this.state.numberOfParagraph}
            onChange={(event) => this.setState({ numberOfParagraph: event.target.value })
            }
          />

          <button type="submit" className="btn">
            Fetch
          </button>
        </form>

        <article className="lorem-text">
          {this.state.text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    );
  }
}
