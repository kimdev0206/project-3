import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Style from "./CheckBox.style";
import Common from "../common";
import { useAlert } from "../../hooks/useAlert";

const items = [
  { label: "제목", key: "isTitle" },
  { label: "요약", key: "isSummary" },
  { label: "목차", key: "isContents" },
  { label: "상세 설명", key: "isDetail" },
];

interface Props {
  checkedKeys: string[];
  setCheckedKeys: (checkedKeys: string[]) => void;
}

export default function CheckBox({ checkedKeys, setCheckedKeys }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const alert = useAlert();

  const handleCheck = (key: string) => {
    if (!searchParams.get("keyword")) {
      alert("검색어를 입력해주세요.");
      return;
    }

    const isChecked = checkedKeys.includes(key);
    const newSearchParams = new URLSearchParams(searchParams);

    if (isChecked) {
      setCheckedKeys(checkedKeys.filter((checkedKey) => checkedKey !== key));
      newSearchParams.delete(key);
    } else {
      setCheckedKeys([...checkedKeys, key]);
      newSearchParams.set(key, true.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handleOpen = (event: MouseEvent) => {
    ref.current &&
      !ref.current.contains(event.target as Node) &&
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOpen);

    return () => {
      document.removeEventListener("mousedown", handleOpen);
    };
  }, [ref]);

  return (
    <Style.Container>
      <Common.Button
        size="medium"
        state="normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        선택
      </Common.Button>

      {isOpen && (
        <Style.Items ref={ref}>
          {items.map((item) => (
            <Common.Button
              size="medium"
              state={checkedKeys.includes(item.key) ? "active" : "normal"}
              key={item.key}
              onClick={() => handleCheck(item.key)}
            >
              {item.label}
            </Common.Button>
          ))}
        </Style.Items>
      )}
    </Style.Container>
  );
}
