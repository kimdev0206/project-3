import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    gap: ${({ theme }) => theme.gap.small};
  }
`;

const Categories = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.gap.small};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    gap: 0;
  }
`;

export default {
  Container,
  Categories,
};
