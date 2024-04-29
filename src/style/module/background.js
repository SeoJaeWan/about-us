import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const backgroundProperties = [
  { key: "background", value: "background" },
  { key: "background-color", value: "backgroundColor" },
  { key: "background-image", value: "backgroundImage" },
  { key: "background-position", value: "backgroundPosition" },
  { key: "background-repeat", value: "backgroundRepeat" },
  { key: "background-size", value: "backgroundSize" },
];

const background = css`
  ${generateMediaResponsiveStyles(backgroundProperties)}
`;

export default background;
