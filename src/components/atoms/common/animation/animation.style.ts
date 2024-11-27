import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        transform: translateY(-20px);
    }
`;

const infiniteUpDown = keyframes`
    0% {
        transform: translateY(-20);
    }

    100% {
        transform: translateY(0px);
    }
`;

export const animations = {
  fadeUp,
  infiniteUpDown,
};
