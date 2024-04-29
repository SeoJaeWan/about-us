import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const overflowProperties = [
  { key: "overflow", value: "overflow" },
  { key: "overflow-x", value: "overflowX" },
  { key: "overflow-y", value: "overflowY" },
];

const overflow = css`
  ${generateMediaResponsiveStyles(overflowProperties)}
`;

export default overflow;
