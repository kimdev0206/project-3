import styled from "styled-components";
import Book from "../book";

const Container = styled.div`
  ${Book.ItemStyle.MiddleSection} p,
  ${Book.ItemStyle.LikesButtonBox} {
    display: none;
  }

  position: relative;
`;

const Index = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: bold;
  font-style: italic;
  border: ${({ theme }) => theme.border.default};
`;

export default {
  Container,
  Index,
};
