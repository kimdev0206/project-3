import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.gap.small};

  input::-webkit-inner-spin-button {
    appearance: none;
  }
`;

const LeftSection = styled.section`
  display: inline-flex;
  width: 50%;

  input {
    width: 100%;
  }
`;

const RightSection = styled.section`
  margin-left: auto;
`;

const Alert = styled.div`
  position: absolute;
  right: 0;
  top: -70px;
  padding: ${({ theme }) => theme.input.medium.padding};
  border-radius: ${({ theme }) => theme.border.radius};
  border: ${({ theme }) => theme.border.default};
  text-align: center;

  p {
    padding-bottom: 0.25rem;
  }
`;

export default {
  Container,
  LeftSection,
  RightSection,
  Alert,
};
