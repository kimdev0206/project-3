import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Style = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width.large};

  margin: 0 auto;
  padding: 20px 0;
`;

interface RouterError {
  statusText?: string;
  message?: string;
}

export default function Error() {
  const error = useRouteError() as RouterError;

  return (
    <Style>
      <h1>오류가 발생하였습니다.</h1>
      <p>{error.statusText || error.message}</p>
    </Style>
  );
}
