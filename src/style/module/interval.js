import { css } from "styled-components";
import { generateMediaResponsiveStyles } from "./utils/helper";

const intervalProperties = [
  { key: "margin", value: "margin" },
  { key: "margin-top", value: "marginTop" },
  { key: "margin-right", value: "marginRight" },
  { key: "margin-bottom", value: "marginBottom" },
  { key: "margin-left", value: "marginLeft" },
  { key: "padding", value: "padding" },
  { key: "padding-top", value: "paddingTop" },
  { key: "padding-right", value: "paddingRight" },
  { key: "padding-bottom", value: "paddingBottom" },
  { key: "padding-left", value: "paddingLeft" },
];

const interval = css`
  ${generateMediaResponsiveStyles(intervalProperties)}
`;

export default interval;
