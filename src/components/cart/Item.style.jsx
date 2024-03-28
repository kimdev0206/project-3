import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: ${({ theme }) => theme.input.medium.padding};
  border: ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.border.radius};
`;

const MiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.gap.small};

  h1 {
    line-height: 1;
  }
`;

export default {
  Container,
  MiddleSection,
};
