import { Component } from "react";

export default class PageButtonList extends Component {
  render() {
    return (
      <div className="btn-container">
        <button className="prev-btn" onClick={this.props.handlePreviousPage}>
          previous
        </button>

        {this.props.data.map((item, index) => (
          <button
            key={index}
            className={`page-btn ${
              this.props.pageSelected === index ? "active-btn" : null
            }`}
            onClick={() => this.props.handlePageSelected(index)}
          >
            {index + 1}
          </button>
        ))}

        <button className="next-btn" onClick={this.props.handleNextPage}>
          next
        </button>
      </div>
    );
  }
}
