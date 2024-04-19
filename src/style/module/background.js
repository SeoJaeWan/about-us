import { css } from "styled-components";

const background = css`
  background: ${(props) => props.$background};
  background-color: ${(props) => props.$backgroundColor};
  background-image: ${(props) => props.$backgroundImage};
  background-position: ${(props) => props.$backgroundPosition};
  background-repeat: ${(props) => props.$backgroundRepeat};
  background-size: ${(props) => props.$backgroundSize};
`;

export default background;
