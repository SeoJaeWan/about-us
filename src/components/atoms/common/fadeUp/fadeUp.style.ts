import styled, { keyframes } from "styled-components";

const fadeUpAni = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Trigger = "fade";

type FadeUpStyleProps = {
  $duration: number;
  $delay: number;
};

const FadeUpStyle = styled.div<FadeUpStyleProps>`
  opacity: 0;

  &.${Trigger} {
    animation: ${fadeUpAni} ${(props) => props.$duration}s forwards
      ${(props) => props.$delay}s;
  }
`;

export default FadeUpStyle;
