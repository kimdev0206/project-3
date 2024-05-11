import styled from "styled-components";
import Common from "../components/common";
import Home from "../components/home";
import useHome from "../hooks/useHome";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.large};
`;

export default function HomePage() {
  const { bestBooks, newBooks, promotions } = useHome();

  return (
    <Style>
      <section>
        <Home.PromotionList promotions={promotions} />
      </section>

      <section>
        <Common.Title size="large">베스트 셀러</Common.Title>
        <Home.BestBookList books={bestBooks} />
      </section>

      <section>
        <Common.Title size="large">신간 안내</Common.Title>
        <Home.NewBookList books={newBooks} />
      </section>
    </Style>
  );
}
