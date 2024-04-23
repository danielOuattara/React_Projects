import { useThemeContext } from "./../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useThemeContext();
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
