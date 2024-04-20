import { css } from "styled-components";

const font = css`
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  font-size: ${(props) => props.$fontSize};
  line-height: ${(props) => props.$lineHeight};
  text-decoration: ${(props) => props.$textDecoration};
  word-break: ${(props) => props.$wordBreak || "break-all"};
  letter-spacing: ${(props) => props.$letterSpace};

  ${(props) =>
    props.$lineClamp &&
    `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props.$lineClamp};
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: ${props.$lineClamp};
  display: -ms-box;
  -ms-box-orient: vertical;
  -ms-line-clamp: ${props.$lineClamp};
  `}
`;

export default font;
