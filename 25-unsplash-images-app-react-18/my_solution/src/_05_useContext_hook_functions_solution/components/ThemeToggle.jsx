import { useGlobalContext } from "./../context/AppContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
