import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 4vw;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: ${toRem(46)};

  .background {
    position: absolute;
    left: 0;
    top: 0;

    width: 100vw;

    padding: 0 5vw;

    overflow: hidden;

    &:nth-child(1) {
      z-index: 3;
    }

    &:nth-child(2) {
      z-index: 2;
    }

    &:nth-child(3) {
      z-index: 1;
    }
  }

  .black {
    width: 100%;

    .content {
      background-color: black;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }

  .white {
    width: 100%;

    .content {
      background-color: white;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }

  .content {
    height: ${toRem(46)};

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    font-size: ${toRem(24)};
    font-weight: 600;

    p {
      color: transparent;
    }
  }
`;

export default HeaderStyle;
