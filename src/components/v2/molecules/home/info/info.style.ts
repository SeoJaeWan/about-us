import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 300vh;
`;

const Hidden = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  height: 100vh;

  overflow-x: hidden;
`;

const Scroller = styled.div`
  display: flex;
`;

const InfoStyle = {
  Container,
  Hidden,
  Scroller,
};

export default InfoStyle;
