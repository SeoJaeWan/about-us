import { css } from "styled-components";

const transform = css`
  transform: ${(props) => props.$transform};
  transition: ${(props) => props.transition};
`;
