import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const otherProperties = [
  { key: "visibility", value: "visibility" },
  { key: "cursor", value: "cursor" },
];

const Other = css`
  ${generateMediaResponsiveStyles(otherProperties)}
`;

export default Other;
