export type ThemeName = "light" | "dark";

interface Theme {
  name: ThemeName;
  color: Record<"primary" | "background", string>;
}

const light: Theme = {
  name: "light",
  color: {
    primary: "black",
    background: "white",
  },
};

const dark: Theme = {
  name: "dark",
  color: {
    primary: "white",
    background: "black",
  },
};

export function getTheme(themeName: ThemeName): Theme {
  return themeName === "light" ? light : dark;
}
