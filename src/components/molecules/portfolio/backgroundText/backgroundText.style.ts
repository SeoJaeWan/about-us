import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const BackgroundTextStyle = styled.div`
  position: fixed;
  top: 30vh;
  left: 0;
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${toRem(50)};

  width: 100%;

  padding: ${toRem(10)};

  svg {
    width: 100%;
    height: auto;
  }
`;

export default BackgroundTextStyle;
