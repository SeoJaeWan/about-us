import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";

const center = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const centerY = css`
  top: 50%;
  transform: translateY(-50%);
`;

const centerX = css`
  left: 50%;
  transform: translateX(-50%);
`;

const positionProperties = [
  { key: "position", value: "position" },
  { key: "top", value: "top" },
  { key: "left", value: "left" },
  { key: "bottom", value: "bottom" },
  { key: "right", value: "right" },
  { key: "z-index", value: "zIndex" },
];

const position = css`
  ${generateMediaResponsiveStyles(positionProperties)}

  ${(props) => props.$isCenter && center}
  ${(props) => props.$isCenterY && centerY}
  ${(props) => props.$isCenterX && centerX}
`;

export default position;
