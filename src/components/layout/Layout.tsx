import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

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
      <Header />
      <Style>{children}</Style>
      <Footer />
    </>
  );
}
