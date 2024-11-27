import { createGlobalStyle, keyframes } from "styled-components";
import reset from "styled-reset";
import { realColor } from "../theme/theme";

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

const fadeUpOpacity = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 0.4;
        transform: translateY(0px);
    }
`;

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        color: ${realColor.black};
        line-height: normal;
    }
    
    body {
        font-family: var(--font-pretendard); 
    }

    .hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0 0 0 0);
        overflow: hidden;
    }

    a {
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }


    .fadeUp {
        opacity: 0;
        transform: translateY(20px);
        animation: ${fadeUp} 1s forwards;
    }

    .fadeUp--delay {
        opacity: 0;
        transform: translateY(20px);
        animation: ${fadeUp} 1s forwards 0.3s;
    }

    
    .fadeUp--ref {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s, transform 1s;
    }
    
    .fadeUp--ref {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s, transform 1s;
    }

    .fadeUpReverse--ref {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s, transform 1s;
    }
    
    .fadeUpOpacity--ref {
        opacity: 0.2;
        transform: translateY(0);
        transition: opacity 1s, transform 1s;
    }

    .fadeUpOpacityReverse--ref {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s, transform 1s;
    }
  
`;

export default GlobalStyle;
