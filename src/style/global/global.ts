import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { realColor } from "../theme/theme";

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
`;

export default GlobalStyle;
