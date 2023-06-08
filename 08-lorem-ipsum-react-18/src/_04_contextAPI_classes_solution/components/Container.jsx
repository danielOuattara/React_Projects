import { Component } from "react";
import { TextGeneratorContext } from "./../context/TextGeneratorContext";

export default class Container extends Component {
  render() {
    return (
      <TextGeneratorContext.Consumer>
        {(context) => {
          const {
            numberOfParagraph,
            text,
            handleNumberOfParagraph,
            handleTextArray,
            data,
          } = context;

          const handleSubmit = (event) => {
            event.preventDefault();
            return handleTextArray();
          };

          return (
            <section className="section-center">
              <p>context API + classes solution</p>
              <h3>tired of boring lorem ipsum ?</h3>

              <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="numbParagraph">paragraph ?</label>
                <input
                  id="numbParagraph"
                  type="number"
                  min="1"
                  max={data.length}
                  value={numberOfParagraph}
                  onChange={(event) =>
                    handleNumberOfParagraph(event.target.value)
                  }
                />
                <button type="submit" className="btn">
                  Generate
                </button>
              </form>
              <article className="lorem-text">
                {text.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </article>
            </section>
          );
        }}
      </TextGeneratorContext.Consumer>
    );
  }
}
