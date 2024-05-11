import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Slider = styled.section<{ transform: number }>`
  display: flex;
  transform: translateX(${({ transform }) => transform}%);
  transition: transform 0.5s ease-in-out;
`;

const Buttons = styled.section`
  button {
    display: none;
  }
`;

export default {
  Container,
  Slider,
  Buttons,
};
