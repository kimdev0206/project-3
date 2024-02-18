export type ThemeName = "light" | "dark";

export type ColorKey = "primary" | "background";

export type HeadingSize = "large" | "medium" | "small";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: Record<HeadingSize, { fontSize: string }>;
}

const light: Theme = {
  name: "light",
  color: {
    primary: "black",
    background: "white",
  },
  heading: {
    large: { fontSize: "2rem" },
    medium: { fontSize: "1.5rem" },
    small: { fontSize: "1rem" },
  },
};

const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "white",
    background: "black",
  },
};

export function getTheme(themeName: ThemeName): Theme {
  return themeName === "light" ? light : dark;
}
