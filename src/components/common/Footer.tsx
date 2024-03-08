import styled from "styled-components";

const Style = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width.large};

  margin: 0 auto;
  padding: 20px 0;

  border-top: ${({ theme }) => theme.border.default};
`;

export default function Footer() {
  return <Style></Style>;
}
