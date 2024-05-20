import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const positionProperties = [
  { key: "position", value: "position" },
  { key: "top", value: "top" },
  { key: "left", value: "left" },
  { key: "bottom", value: "bottom" },
  { key: "right", value: "right" },
  { key: "z-index", value: "zIndex" },
  { key: "center", value: "center", isCenter: true },
  { key: "centerX", value: "centerX", isCenterX: true },
  { key: "centerY", value: "centerY", isCenterY: true },
];

const position = css`
  ${generateMediaResponsiveStyles(positionProperties)}
`;

export default position;
