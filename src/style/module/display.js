import { css } from "styled-components";

const display = css`
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-wrap: ${(props) => props.$flexWrap};
  flex-direction: ${(props) => props.$flexDirection};
  order: ${(props) => props.$order};
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  grid-template-rows: ${(props) => props.$gridTemplateRows};
  gap: ${(props) => props.$gap};
`;

export default display;
