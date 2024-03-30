import styled from "styled-components";

const Container = styled.fieldset`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};
  padding: ${({ theme }) => theme.input.small.padding};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    justify-content: space-between;
    gap: 0;
  }
`;

export default {
  Container,
};
