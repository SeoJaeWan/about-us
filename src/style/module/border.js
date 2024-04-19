import { css } from "styled-components";

const border = css`
  border: ${(props) => props.$border};
  border-width: ${(props) => props.$borderWidth};

  border-top: ${(props) => props.$borderTop};
  border-top-width: ${(props) => props.$borderTopWidth};

  border-left: ${(props) => props.$borderLeft};
  border-left-width: ${(props) => props.$borderLeftWidth};

  border-bottom: ${(props) => props.$borderBottom};
  border-bottom-width: ${(props) => props.$borderBottomWidth};

  border-right: ${(props) => props.$borderRight};
  border-right-width: ${(props) => props.$borderRightWidth};

  border-color: ${(props) => props.$borderColor};
  border-style: ${(props) => props.$borderStyle};
  border-radius: ${(props) => props.$radius};
`;

export default border;
