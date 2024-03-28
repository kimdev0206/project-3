import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.large};
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

const Items = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.medium};
`;

const Item = styled.div`
  padding: ${({ theme }) => theme.input.medium.padding};
  border: ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.border.radius};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.small};

  fieldset {
    display: flex;
    justify-content: start;
    gap: ${({ theme }) => theme.gap.small};
    margin: 0;
    padding: 0;
    border: 0;
    label {
      width: 80px;
    }
    input {
      flex: 1;
    }
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    fieldset {
      flex-direction: column;
      div {
        margin-left: auto;
      }
    }
  }
`;

const Error = styled.p`
  text-align: right;
  padding-bottom: 0.5rem;
`;

export default {
  Container,
  Items,
  Item,
  Form,
  Error,
};
