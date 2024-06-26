export type ThemeName = "light" | "dark";

export type ColorKey = "primary" | "background";

export type ButtonState = "default" | "active";

export type Size = "large" | "medium" | "small";

export type MediaQuery = "mobile" | "desktop";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  buttonState: Record<ButtonState, { primary: string; background: string }>;
  heading: Record<Size, { fontSize: string }>;
  input: Record<Size, { fontSize: string; padding: string }>;
  gap: Record<Size, string>;
  border: { default: string; radius: string };
  layout: {
    width: Record<Size, string>;
  };
  img: Record<Size, number>;
  mediaQuery: Record<MediaQuery, string>;
}

const light: Theme = {
  name: "light",
  color: {
    primary: "black",
    background: "white",
  },
  buttonState: {
    default: { primary: "black", background: "white" },
    active: { primary: "white", background: "black" },
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
  gap: {
    large: "24px",
    medium: "12px",
    small: "8px",
  },
  border: { default: "1px solid black", radius: "4px" },
  layout: {
    width: { large: "1020px", medium: "760px", small: "320px" },
  },
  img: { large: 600, medium: 300, small: 160 },
  mediaQuery: {
    mobile: "(max-width: 768px)",
    desktop: "(min-width: 1025x)",
  },
};

const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "white",
    background: "black",
  },
  buttonState: {
    default: { primary: "white", background: "black" },
    active: { primary: "black", background: "white" },
  },
  border: { default: "1px solid white", radius: "4px" },
};

export function getTheme(themeName: ThemeName): Theme {
  return themeName === "light" ? light : dark;
}

export function getImgSize(size: Size) {
  return light.img[size];
}
