import { css } from "styled-components";

const centerY = css`
  top: 50%;
  transform: translateY(-50%);
`;

const centerX = css`
  left: 50%;
  transform: translateX(-50%);
`;

const center = css`
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const position = css`
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  bottom: ${(props) => props.$bottom};
  right: ${(props) => props.$right};

  ${(props) => props.$isCenter && center}
  ${(props) => props.$isCenterY && centerY}
  ${(props) => props.$isCenterX && centerX}

  z-index: ${(props) => props.$zIndex};
`;

export default position;
