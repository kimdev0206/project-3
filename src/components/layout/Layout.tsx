import styled from "styled-components";
import Common from "../common";

const Style = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width.large};

  margin: 0 auto;
  padding: 20px 0;
`;

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Common.Header />
      <Style>{children}</Style>
      <Common.Footer />
    </>
  );
}
