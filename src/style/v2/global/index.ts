import * as styled from "styled-components";
import reset from "styled-reset";

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  html {
    --background: #121212;
    --content: #fffff0;
  }

  main {
    background: var(--background);
    color: var(--content);
  }

  * {
    box-sizing: border-box;
    line-height: normal;
    word-break: break-all;
  }
`;

export default GlobalStyle;
