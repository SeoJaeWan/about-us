import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 4vw;
  left: 0;

  width: 100vw;

  padding: 0 5vw;
  font-size: ${toRem(16)};
  font-weight: 600;

  div {
    padding: ${toRem(12)} 0;
    border-top: 2px solid black;
    border-bottom: 1px solid black;
  }
`;

export default HeaderStyle;
