import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Common from "../common";
import IPagination from "../../models/pagination.model";

const Style = styled.div`
  ol {
    display: flex;
    gap: ${({ theme }) => theme.gap.small};
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

interface Props {
  pagination: IPagination;
}

export default function Pagination({ pagination }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, count } = pagination;
  const pages = Math.ceil(count / 8);

  const onClick = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", page.toString());
    setSearchParams(newSearchParams);
  };

  return (
    <Style>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <Common.Button
                  size="small"
                  state={index + 1 === page ? "active" : "normal"}
                  onClick={() => onClick(index + 1)}
                >
                  {(index + 1).toString()}
                </Common.Button>
              </li>
            ))}
        </ol>
      )}
    </Style>
  );
}
