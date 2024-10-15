import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 4vw;
  left: 0;

  width: 100vw;
  height: ${toRem(46)};

  padding: 0 5vw;
  font-size: ${toRem(16)};
  font-weight: 600;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    border-top: 2px solid black;
    border-bottom: 1px solid black;
  }
`;

export default HeaderStyle;
