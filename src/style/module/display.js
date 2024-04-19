import { css } from "styled-components";

const display = css`
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  grid-template-rows: ${(props) => props.$gridTemplateRows};
  gap: ${(props) => props.$gap};
`;

export default display;
