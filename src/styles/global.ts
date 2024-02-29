import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  * {
    background-color: ${({ themeName }) =>
      themeName === "light" ? "white" : "black"};

    color: ${({ themeName }) => (themeName === "light" ? "black" : "white")};
  }

  h1 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
