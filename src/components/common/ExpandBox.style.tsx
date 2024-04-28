import styled from "styled-components";
import { Props } from "./ExpandBox";

const Container = styled.div<Omit<Props, "children">>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ $limit, $isExpand }) =>
      $isExpand ? "none" : $limit};
    -webkit-box-orient: vertical;
  }
`;

const BottomSection = styled.section<Pick<Props, "$isExpand">>`
  display: flex;
  justify-content: end;

  svg {
    transform: ${({ $isExpand }) =>
      $isExpand ? "rotate(180deg)" : "rotate(0)"};
  }
`;

export default {
  Container,
  BottomSection,
};
