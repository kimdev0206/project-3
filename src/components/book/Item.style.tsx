import { Link } from "react-router-dom";
import styled from "styled-components";
import { Props } from "./Item";

const Container = styled(Link)<Pick<Props, "$view">>`
  display: flex;
  flex-direction: ${({ $view }) => ($view === "grid" ? "column" : "row")};
  box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 0 4px rgba(0, 0, 0, 0.2)"
      : "0 0 4px rgba(255, 255, 255, 0.2)"};
  text-decoration: none;
`;

const TopSection = styled.section<Pick<Props, "$view">>`
  width: ${({ theme, $view }) =>
    $view === "grid" ? "auto" : `${theme.img.small}px`};

  img {
    width: 100%;
  }
`;

const MiddleSection = styled.section<Pick<Props, "$view">>`
  display: flex;
  flex: ${({ $view }) => ($view === "grid" ? 0 : 1)};
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.input.medium.padding};

  h1,
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    -webkit-line-clamp: 4;
  }
  span {
    margin: 0;
  }
`;

const BottomSection = styled.section<Pick<Props, "$view">>`
  display: flex;
  flex-direction: ${({ $view }) => ($view === "grid" ? "row" : "column")};
  gap: ${({ theme, $view }) => $view === "list" && theme.gap.small};
  justify-content: ${({ $view }) => $view === "grid" && "space-between"};
  align-items: end;
  margin-top: auto;
  padding: ${({ theme }) => theme.input.medium.padding};
`;

const LikesButtonBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.small};
  padding: ${({ theme }) => theme.input.small.padding};
  border: ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export default {
  Container,
  TopSection,
  MiddleSection,
  BottomSection,
  LikesButtonBox,
};
