import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.large};
`;

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;

  h1 {
    margin-bottom: 0;
  }
`;

const MiddleSection = styled.section`
  display: flex;

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

export default {
  Container,
  TopSection,
  MiddleSection,
};
