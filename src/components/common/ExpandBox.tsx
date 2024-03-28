import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Style from "./ExpandBox.style";
import Button from "./Button";

export interface Props {
  children: React.ReactNode;
  limit: number;
  $isExpand: boolean;
}

export default function ExpandBox({ children, limit }: Props) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Style.Container limit={limit} $isExpand={isExpand}>
      <p>{children}</p>

      <Style.BottomSection $isExpand={isExpand}>
        <Button
          size="small"
          state="normal"
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? "접기" : "펼치기"} <FaAngleDown />
        </Button>
      </Style.BottomSection>
    </Style.Container>
  );
}
