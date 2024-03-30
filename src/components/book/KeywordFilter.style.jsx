import styled from "styled-components";

const Container = styled.fieldset`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.gap.small};
  padding: ${({ theme }) => theme.input.small.padding};

  input {
    flex: 1;
    box-sizing: border-box;
  }
`;

export default {
  Container,
};
