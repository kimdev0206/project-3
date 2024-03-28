import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Style from "./Pagination.style";
import Common from "../common";
import IPagination from "../../models/pagination.model";

interface Props {
  pagination: IPagination;
}

export default function Pagination({ pagination }: Props) {
  const [pageGroup, setPageGroup] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, count } = pagination;
  const pages = Math.ceil(count / 8);
  const pageGroups = Math.ceil(pages / 10);

  const onClick = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", page.toString());
    setSearchParams(newSearchParams);
  };

  return (
    <>
      {pages > 0 && (
        <Style.Container>
          <Style.Slider transform={pageGroup * -100}>
            {Array.from({ length: pages }, (_, index) => (
              <Common.Button
                size="small"
                state={index + 1 === +page ? "active" : "normal"}
                onClick={() => onClick(index + 1)}
                key={index}
              >
                {index + 1}
              </Common.Button>
            ))}
          </Style.Slider>

          <Style.Sliders>
            {Array.from({ length: pageGroups }, (_, index) => (
              <Common.Button
                size="small"
                state={index === pageGroup ? "active" : "normal"}
                onClick={() => setPageGroup(index)}
                key={index}
              />
            ))}
          </Style.Sliders>
        </Style.Container>
      )}
    </>
  );
}
