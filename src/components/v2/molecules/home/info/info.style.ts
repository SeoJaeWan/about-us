import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 300vh;

  overflow-x: hidden;
`;

const Scroller = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;

  height: 100vh;
`;

const InfoStyle = {
  Container,
  Scroller,
};

export default InfoStyle;
