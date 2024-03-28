import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};
  justify-content: space-between;

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.large};
`;

const Items = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.medium};
`;

export default {
  Container,
  Summary,
  Items,
};
