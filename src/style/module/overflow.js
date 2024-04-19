import { css } from "styled-components";

const overflow = css`
  overflow: ${(props) => props.$overflow};
  overflow-x: ${(props) => props.$overflowX};
  overflow-y: ${(props) => props.$overflowY};
`;

export default overflow;
