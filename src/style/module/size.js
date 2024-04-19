import { css } from "styled-components";

const size = css`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  max-width: ${(props) => props.$maxWidth};
  max-height: ${(props) => props.$maxHeight};

  min-width: ${(props) => props.$minWidth};
  min-height: ${(props) => props.$minHeight};
`;

export default size;
