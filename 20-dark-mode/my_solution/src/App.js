import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    return localStorage.setItem("theme", theme);
  };

  let userTheme = localStorage.getItem("theme");
  console.log("userTheme =", userTheme);

  useEffect(() => {
    document.documentElement.className = userTheme;
  }, [userTheme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
