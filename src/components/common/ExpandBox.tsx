import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";

const Style = styled.div<Omit<Props, "children">>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ limit, $isExpand }) =>
      $isExpand ? "none" : limit};
    -webkit-box-orient: vertical;
  }

  .toggle {
    display: flex;
    justify-content: end;

    svg {
      transform: ${({ $isExpand }) =>
        $isExpand ? "rotate(180deg)" : "rotate(0)"};
    }
  }
`;

interface Props {
  children: React.ReactNode;
  limit: number;
  $isExpand: boolean;
}

export default function ExpandBox({ children, limit }: Props) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Style limit={limit} $isExpand={isExpand}>
      <p>{children}</p>

      <div className="toggle">
        <Button
          size="small"
          state="normal"
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? "접기" : "펼치기"} <FaAngleDown />
        </Button>
      </div>
    </Style>
  );
}
