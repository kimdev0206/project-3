import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.small};
  overflow: hidden;
`;

const Slider = styled.section<{ transform: number }>`
  display: flex;
  transform: translateX(${({ transform }) => transform}%);
  transition: transform 0.5s ease-in-out;

  button {
    display: inline-flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 10%;
    justify-content: center;
  }
`;

const Sliders = styled.section`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.small};

  button {
    width: 16px;
    height: 16px;
    border: ${({ theme }) => theme.border.default};
    border-radius: 50%;
  }
`;

export default {
  Container,
  Slider,
  Sliders,
};
