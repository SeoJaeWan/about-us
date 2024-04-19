import { css } from "styled-components";

const font = css`
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  font-size: ${(props) => props.$fontSize};
  line-height: ${(props) => props.$lineHeight};
  text-decoration: ${(props) => props.$textDecoration};
  word-break: ${(props) => props.$wordBreak};
`;

export default font;
