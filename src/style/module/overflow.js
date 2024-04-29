import { css } from "styled-components";

const overflow = css`
  overflow: ${(props) => props.$overflow};
  overflow-x: ${(props) => props.$overflowX};
  overflow-y: ${(props) => props.$overflowY};

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

export default overflow;
