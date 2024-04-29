import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const transformProperties = [
  { key: "transform", value: "transform" },
  { key: "translate", value: "translate" },
];

const transform = css`
  ${generateMediaResponsiveStyles(transformProperties)}
`;

export default transform;
