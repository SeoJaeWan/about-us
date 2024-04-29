import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const sizeProperties = [
  { key: "width", value: "width" },
  { key: "height", value: "height" },
  { key: "max-width", value: "maxWidth" },
  { key: "max-height", value: "maxHeight" },
  { key: "min-width", value: "minWidth" },
  { key: "min-height", value: "minHeight" },
  { key: "aspect-ratio", value: "aspectRatio" },
  { key: "object-fit", value: "objectFit" },
];

const size = css`
  ${generateMediaResponsiveStyles(sizeProperties)}
`;

export default size;
