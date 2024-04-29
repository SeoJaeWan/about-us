import { css } from "styled-components";

const background = css`
  background: ${(props) => props.$background};
  background-color: ${(props) => props.$backgroundColor};
  background-image: ${(props) => props.$backgroundImage};

  background-position: ${(props) => props.$backgroundPosition};
  background-repeat: ${(props) => props.$backgroundRepeat};
  background-size: ${(props) => props.$backgroundSize};

  /* mobile */
  @media (max-width: ${(props) => props.theme.mobile}) {
    background: ${(props) => props.$mobileBackground};
    background-color: ${(props) => props.$mobileBackgroundColor};
    background-image: ${(props) => props.$mobileBackgroundImage};

    background-position: ${(props) => props.$mobileBackgroundPosition};
    background-repeat: ${(props) => props.$mobileBackgroundRepeat};
    background-size: ${(props) => props.$mobileBackgroundSize};
  }

  /* tablet */
  @media (max-width: ${(props) => props.theme.tablet}) {
    background: ${(props) => props.$tabletBackground};
    background-color: ${(props) => props.$tabletBackgroundColor};
    background-image: ${(props) => props.$tabletBackgroundImage};

    background-position: ${(props) => props.$tabletBackgroundPosition};
    background-repeat: ${(props) => props.$tabletBackgroundRepeat};
    background-size: ${(props) => props.$tabletBackgroundSize};
  }

  /* notebook */
  @media (max-width: ${(props) => props.theme.notebook}) {
    background: ${(props) => props.$notebookBackground};
    background-color: ${(props) => props.$notebookBackgroundColor};
    background-image: ${(props) => props.$notebookBackgroundImage};

    background-position: ${(props) => props.$notebookBackgroundPosition};
    background-repeat: ${(props) => props.$notebookBackgroundRepeat};
    background-size: ${(props) => props.$notebookBackgroundSize};
  }
`;

export default background;
