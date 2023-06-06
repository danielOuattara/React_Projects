import { Component } from "react";

export default class SingleMenuClass extends Component {
  render() {
    return (
      <article key={this.props.id} className="menu-item">
        <img className="photo" src={this.props.img} alt={this.props.title} />
        <div className="item-info">
          <header>
            <h4 className="title">{this.props.title}</h4>
            <h4 className="price">${this.props.price}</h4>
          </header>
          <p className="item-text">{this.props.desc}</p>
        </div>
      </article>
    );
  }
}
