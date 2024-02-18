import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";

export default function ThemeSwitcher() {
  const { themeName, onClick } = useContext(ThemeContext);

  return <button onClick={onClick}>{themeName}</button>;
}
