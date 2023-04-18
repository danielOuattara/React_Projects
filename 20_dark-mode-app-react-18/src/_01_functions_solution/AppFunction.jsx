/* adding a function to extract information from local storage */

import { Article } from "./components";
import data from "./../data";
import { useEffect, useState } from "react";
//-----------------------------------------------------------------
const getThemeFromLocalStorage = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

//-----------------------------------------------------------------
export default function AppFunction() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    return localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>function solution version</p>
      <main>
        <nav>
          <div className="nav-center">
            <h1>over reacted</h1>
            <button className="btn" onClick={toggleTheme}>
              toggle
            </button>
          </div>
        </nav>
        <section className="articles">
          {data.map((item) => (
            <Article key={item.id} {...item} />
          ))}
        </section>
      </main>
    </>
  );
}
