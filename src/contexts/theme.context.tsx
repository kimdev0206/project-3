import React, { useEffect, useState } from "react";
import { ThemeProvider as ThemeStyle } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { ThemeName, getTheme } from "../styles/theme";

interface ContextType {
  themeName: ThemeName;
  onClick: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ContextType>({
  themeName: "light" as ThemeName,
  onClick: () => {},
});

export function ThemeProvider({ children }: Props) {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const onClick = () => {
    setThemeName(themeName === "light" ? "dark" : "light");

    localStorage.setItem("themeName", themeName === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const themeName = localStorage.getItem("themeName") as ThemeName;
    setThemeName(themeName || "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, onClick }}>
      <ThemeStyle theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeStyle>
    </ThemeContext.Provider>
  );
}
