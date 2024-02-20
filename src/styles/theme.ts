export type ThemeName = "light" | "dark";

export type ColorKey = "primary" | "background";

export type HeadingSize = "large" | "medium" | "small";

export type InputSize = "large" | "medium" | "small";

export type LayoutWidth = "large" | "medium" | "small";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: Record<HeadingSize, { fontSize: string }>;
  input: Record<InputSize, { fontSize: string; padding: string }>;
  borderRadius: { default: string };
  layout: {
    width: Record<LayoutWidth, string>;
  };
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
  input: {
    large: { fontSize: "1.5rem", padding: "1rem 2rem" },
    medium: { fontSize: "1rem", padding: "0.5rem 1rem" },
    small: { fontSize: "0.75rem", padding: "0.25rem 0.5rem" },
  },
  borderRadius: { default: "4px" },
  layout: {
    width: { large: "1020px", medium: "760px", small: "320px" },
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
