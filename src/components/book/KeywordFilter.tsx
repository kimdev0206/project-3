import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Style from "./KeywordFilter.style";
import Common from "../common";
import CheckBox from "./CheckBox";

const keys = ["isTitle", "isSummary", "isContents", "isDetail"];

export default function KeywordFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(
    searchParams.get("keyword") || ""
  );
  const [checkedKeys, setCheckedKeys] = useState<string[]>(
    keys.filter((key) => searchParams.get(key))
  );

  const handleKeyword = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    console.log(keyword);

    if (keyword) {
      setCheckedKeys(keys);
      keys.forEach((key) => newSearchParams.set(key, true.toString()));

      newSearchParams.set("keyword", keyword);
    } else {
      keys.forEach((key) => newSearchParams.delete(key));

      newSearchParams.delete("keyword");
    }

    setSearchParams(newSearchParams);
  };

  return (
    <Style.Container>
      <CheckBox checkedKeys={checkedKeys} setCheckedKeys={setCheckedKeys} />

      <Common.InputText
        size="medium"
        placeholder="검색어"
        defaultValue={keyword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setKeyword(event.target.value)
        }
        onBlur={handleKeyword}
      />
    </Style.Container>
  );
}
