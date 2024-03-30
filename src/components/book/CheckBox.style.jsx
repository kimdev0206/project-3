import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Items = styled.ul`
  position: absolute;
  z-index: 1;
  margin-block: 0;
  padding-left: 0;
`;

export default {
  Container,
  Items,
};
