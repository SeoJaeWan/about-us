import { css } from "styled-components";

const border = css`
  border: ${(props) => props.$border};
  border-width: ${(props) => props.$borderWidth};

  border-top: ${(props) => props.$borderTop};
  border-top-width: ${(props) => props.$borderTopWidth};

  border-left: ${(props) => props.$borderLeft};
  border-left-width: ${(props) => props.$borderLeftWidth};

  border-bottom: ${(props) => props.$borderBottom};
  border-bottom-width: ${(props) => props.$borderBottomWidth};

  border-right: ${(props) => props.$borderRight};
  border-right-width: ${(props) => props.$borderRightWidth};

  border-color: ${(props) => props.$borderColor};
  border-style: ${(props) => props.$borderStyle};
  border-radius: ${(props) => props.$borderRadius};

  box-shadow: ${(props) => props.$boxShadow};

  /* mobile */
  @media (max-width: ${(props) => props.theme.mobile}) {
    border: ${(props) => props.$mobileBorder};
    border-width: ${(props) => props.$mobileBorderWidth};

    border-top: ${(props) => props.$mobileBorderTop};
    border-top-width: ${(props) => props.$mobileBorderTopWidth};

    border-left: ${(props) => props.$mobileBorderLeft};
    border-left-width: ${(props) => props.$mobileBorderLeftWidth};

    border-bottom: ${(props) => props.$mobileBorderBottom};
    border-bottom-width: ${(props) => props.$mobileBorderBottomWidth};

    border-right: ${(props) => props.$mobileBorderRight};
    border-right-width: ${(props) => props.$mobileBorderRightWidth};

    border-color: ${(props) => props.$mobileBorderColor};
    border-style: ${(props) => props.$mobileBorderStyle};
    border-radius: ${(props) => props.$mobileBorderRadius};

    box-shadow: ${(props) => props.$mobileBoxShadow};
  }

  /* tablet */
  @media (max-width: ${(props) => props.theme.tablet}) {
    border: ${(props) => props.$tabletBorder};
    border-width: ${(props) => props.$tabletBorderWidth};

    border-top: ${(props) => props.$tabletBorderTop};
    border-top-width: ${(props) => props.$tabletBorderTopWidth};

    border-left: ${(props) => props.$tabletBorderLeft};
    border-left-width: ${(props) => props.$tabletBorderLeftWidth};

    border-bottom: ${(props) => props.$tabletBorderBottom};
    border-bottom-width: ${(props) => props.$tabletBorderBottomWidth};

    border-right: ${(props) => props.$tabletBorderRight};
    border-right-width: ${(props) => props.$tabletBorderRightWidth};

    border-color: ${(props) => props.$tabletBorderColor};
    border-style: ${(props) => props.$tabletBorderStyle};
    border-radius: ${(props) => props.$tabletBorderRadius};

    box-shadow: ${(props) => props.$tabletBoxShadow};
  }

  /* notebook */
  @media (max-width: ${(props) => props.theme.notebook}) {
    border: ${(props) => props.$notebookBorder};
    border-width: ${(props) => props.$notebookBorderWidth};

    border-top: ${(props) => props.$notebookBorderTop};
    border-top-width: ${(props) => props.$notebookBorderTopWidth};

    border-left: ${(props) => props.$notebookBorderLeft};
    border-left-width: ${(props) => props.$notebookBorderLeftWidth};

    border-bottom: ${(props) => props.$notebookBorderBottom};
    border-bottom-width: ${(props) => props.$notebookBorderBottomWidth};

    border-right: ${(props) => props.$notebookBorderRight};
    border-right-width: ${(props) => props.$notebookBorderRightWidth};

    border-color: ${(props) => props.$notebookBorderColor};
    border-style: ${(props) => props.$notebookBorderStyle};
    border-radius: ${(props) => props.$notebookBorderRadius};

    box-shadow: ${(props) => props.$notebookBoxShadow};
  }
`;

export default border;
