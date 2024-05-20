import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const displayProperties = [
  { key: "display", value: "display" },
  { key: "justify-content", value: "justifyContent" },
  { key: "align-items", value: "alignItems" },
  { key: "flex-wrap", value: "flexWrap" },
  { key: "flex-direction", value: "flexDirection" },
  { key: "order", value: "order" },
  { key: "grid-template-columns", value: "gridTemplateColumns" },
  { key: "grid-template-rows", value: "gridTemplateRows" },
  { key: "gap", value: "gap" },
];

const display = css`
  ${generateMediaResponsiveStyles(displayProperties)}
`;

export default display;
