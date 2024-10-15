import Image from "@/components/atoms/common/image/image";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const IntroImageStyle = styled.div`
  display: flex;
  justify-content: center;

  animation: ${fadeUp} 1s forwards;
`;

export default IntroImageStyle;
