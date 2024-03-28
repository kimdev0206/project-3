import styled from "styled-components";

const Form = styled.form`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin-inline: auto;
  text-align: center;

  fieldset {
    border: 0;
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }

  p {
    text-align: right;
  }
`;

export default {
  Form,
};
