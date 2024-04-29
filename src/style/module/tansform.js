import { css } from "styled-components";

const transform = css`
  transform: ${(props) => props.$transform};
  transition: ${(props) => props.transition};

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

export default transform;
