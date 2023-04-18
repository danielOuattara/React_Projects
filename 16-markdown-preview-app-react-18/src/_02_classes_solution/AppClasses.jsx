import { Component } from "react";
import data from "./../data";
import ReactMarkdown from "react-markdown";

export default class AppClasses extends Component {
  state = {
    markdown: data,
  };

  render() {
    return (
      <>
        <p style={{ textAlign: "center" }}> classes solution</p>
        <main>
          {" "}
          <section className="markdown">
            <textarea
              name="markdown"
              id="markdown"
              value={this.state.markdown}
              onChange={(event) =>
                this.setState((prevState) => ({
                  ...prevState,
                  markdown: event.target.value,
                }))
              }
            ></textarea>
            <article
              style={{
                height: "55rem",
                width: "100%",
                border: "1px solid black",
                overflow: "scroll",
              }}
              className="result"
            >
              <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
            </article>
          </section>
        </main>
      </>
    );
  }
}
