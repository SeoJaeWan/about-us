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

const fadeReverseDown = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0px);
    }

    100% {
        opacity: 0;
        transform: translateY(20px);
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
    
    .fadeReverseDown {
        animation: ${fadeReverseDown} 1s forwards;
    }
`;

export default GlobalStyle;
