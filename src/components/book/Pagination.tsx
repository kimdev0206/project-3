import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Common from "../common";
import IPagination from "../../models/pagination.model";

const Style = styled.div<{ transform: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.small};
  overflow: hidden;

  .slider {
    display: flex;
    transform: translateX(${({ transform }) => transform}%);
    transition: transform 0.5s ease-in-out;

    button {
      display: inline-flex;
      flex: 0 0 10%;
      justify-content: center;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.gap.small};

    button {
      width: 16px;
      height: 16px;
      border: ${({ theme }) => theme.border.default};
      border-radius: 50%;
    }
  }
`;

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
        <Style transform={pageGroup * -100}>
          <div className="slider">
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
          </div>

          <div className="pagination">
            {Array.from({ length: pageGroups }, (_, index) => (
              <Common.Button
                size="small"
                state={index === pageGroup ? "active" : "normal"}
                onClick={() => setPageGroup(index)}
                key={index}
              />
            ))}
          </div>
        </Style>
      )}
    </>
  );
}
