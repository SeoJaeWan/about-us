import { css } from "styled-components";

const size = css`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  max-width: ${(props) => props.$maxWidth};
  max-height: ${(props) => props.$maxHeight};

  min-width: ${(props) => props.$minWidth};
  min-height: ${(props) => props.$minHeight};

  aspect-ratio: ${(props) => props.$aspectRatio};
  object-fit: ${(props) => props.$objectFit};
`;

export default size;
