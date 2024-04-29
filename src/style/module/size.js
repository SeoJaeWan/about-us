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

  /* mobile */
  @media (max-width: ${(props) => props.theme.mobile}) {
  }

  /* tablet */
  @media (max-width: ${(props) => props.theme.tablet}) {
  }

  /* notebook */
  @media (max-width: ${(props) => props.theme.notebook}) {
  }
`;

export default size;
