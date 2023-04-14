import { useGlobalContext } from "./../context/AppContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();
  return <div>ThemeToggle</div>;
}
