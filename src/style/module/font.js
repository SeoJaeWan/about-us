import { css } from "styled-components";
import { generateMediaResponsiveStyles } from "./utils/helper";

const fontProperties = [
  { key: "color", value: "color" },
  { key: "font-weight", value: "fontWeight" },
  { key: "text-align", value: "textAlign" },
  { key: "font-size", value: "fontSize" },
  { key: "line-height", value: "lineHeight" },
  { key: "text-decoration", value: "textDecoration" },
  { key: "word-break", value: "wordBreak", default: "break-all" },
  { key: "letter-spacing", value: "letterSpace" },
  { key: "line-clamp", value: "lineClamp", isClamp: true },
];

const font = css`
  ${generateMediaResponsiveStyles(fontProperties)}
`;

export default font;
