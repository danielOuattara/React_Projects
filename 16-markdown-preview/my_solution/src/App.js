import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "./data"

function App() {
  const [markdown, setMarkdown] = useState(data);

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
