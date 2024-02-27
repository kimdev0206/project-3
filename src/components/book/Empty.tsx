import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../common/Title";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function BookEmpty() {
  return (
    <Style>
      <Title size="large">검색 결과가 없습니다.</Title>

      <p>
        <Link to="/books">전체 검색 결과로 이동</Link>
      </p>
    </Style>
  );
}
