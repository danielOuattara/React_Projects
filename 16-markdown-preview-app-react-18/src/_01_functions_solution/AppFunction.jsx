import { useState } from "react";
import data from "./../data";
import ReactMarkdown from "react-markdown";

export default function AppFunction() {
  const [markdown, setMarkdown] = useState(data);
  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>function solution</p>
      <main>
        {" "}
        <section className="markdown">
          <textarea
            name="markdown"
            id="markdown"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
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
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    </>
  );
}
