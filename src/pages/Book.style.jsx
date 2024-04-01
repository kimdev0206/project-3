import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.large};
`;

const Section = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

const LeftSection = styled.section``;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.medium};

  dl {
    display: flex;
    margin: 0;
    dt {
      width: 80px;
    }
  }
`;

const Buttons = styled.div`
  margin-top: auto;
`;

export default {
  Container,
  Section,
  LeftSection,
  RightSection,
  Buttons,
};
