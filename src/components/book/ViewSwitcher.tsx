import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { FaList, FaTh } from "react-icons/fa";
import Common from "../common";

const Style = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.small};
`;

const options = [
  { value: "list", icon: <FaList /> },
  { value: "grid", icon: <FaTh /> },
];

export type View = "grid" | "list";

export default function ViewSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (view: View) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("view", view);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get("view")) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <Style>
      {options.map((option) => (
        <Common.Button
          size="medium"
          state={
            searchParams.get("view") === option.value ? "active" : "normal"
          }
          key={option.value}
          onClick={() => handleSwitch(option.value as View)}
        >
          {option.icon}
        </Common.Button>
      ))}
    </Style>
  );
}
