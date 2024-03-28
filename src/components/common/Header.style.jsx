import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width.large};
  border-bottom: ${({ theme }) => theme.border.default};

  a {
    text-decoration: none;
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    position: relative;
    flex-direction: column;
    align-items: start;
    gap: ${({ theme }) => theme.gap.large};
  }
`;

const Logo = styled.section`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.gap.small};

  h1 {
    margin-bottom: 0;
  }
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: end;
    gap: ${({ theme }) => theme.gap.large};
    list-style: none;
    margin: 0;
    padding-left: 0px;

    li a {
      font-size: ${({ theme }) => theme.input.large.fontSize};
    }
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;

    ul {
      justify-content: space-between;

      button {
        position: absolute;
        top: 20px;
        right: 0;
      }
    }
  }
`;

export default {
  Container,
  Logo,
  Navigation,
};
