import { css } from "styled-components";

const Other = css`
  visibility: ${(props) => props.$visibility};
  cursor: ${(props) => props.$cursor};

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

export default Other;
