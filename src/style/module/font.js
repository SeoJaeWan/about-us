import { css } from "styled-components";

const font = css`
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  font-size: ${(props) => props.$fontSize};
  line-height: ${(props) => props.$lineHeight};
  text-decoration: ${(props) => props.$textDecoration};
  word-break: ${(props) => props.$wordBreak || "break-all"};
  letter-spacing: ${(props) => props.$letterSpace};

  ${(props) =>
    props.$lineClamp &&
    `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props.$lineClamp};
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: ${props.$lineClamp};
  display: -ms-box;
  -ms-box-orient: vertical;
  -ms-line-clamp: ${props.$lineClamp};
  `}

  /* mobile */
  @media (max-width: ${(props) => props.theme.mobile}) {
    color: ${(props) => props.$mobileColor};
    font-weight: ${(props) => props.$mobileFontWeight};
    text-align: ${(props) => props.$mobileTextAlign};
    font-size: ${(props) => props.$mobileFontSize};
    line-height: ${(props) => props.$mobileLineHeight};
    text-decoration: ${(props) => props.$mobileTextDecoration};
    word-break: ${(props) => props.$mobileWordBreak || "break-all"};
    letter-spacing: ${(props) => props.$mobileLetterSpace};

    ${(props) =>
      props.$mobileLineClamp &&
      `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props.$mobileLineClamp};
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: ${props.$mobileLineClamp};
  display: -ms-box;
  -ms-box-orient: vertical;
  -ms-line-clamp: ${props.$mobileLineClamp};
  `}
  }

  /* tablet */
  @media (max-width: ${(props) => props.theme.tablet}) {
    color: ${(props) => props.$tabletColor};
    font-weight: ${(props) => props.$tabletFontWeight};
    text-align: ${(props) => props.$tabletTextAlign};
    font-size: ${(props) => props.$tabletFontSize};
    line-height: ${(props) => props.$tabletLineHeight};
    text-decoration: ${(props) => props.$tabletTextDecoration};
    word-break: ${(props) => props.$tabletWordBreak || "break-all"};
    letter-spacing: ${(props) => props.$tabletLetterSpace};

    ${(props) =>
      props.$tabletLineClamp &&
      `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props.$tabletLineClamp};
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: ${props.$tabletLineClamp};
  display: -ms-box;
  -ms-box-orient: vertical;
  -ms-line-clamp: ${props.$tabletLineClamp};
  `}
  }

  /* notebook */
  @media (max-width: ${(props) => props.theme.notebook}) {
    color: ${(props) => props.$notebookColor};
    font-weight: ${(props) => props.$notebookFontWeight};
    text-align: ${(props) => props.$notebookTextAlign};
    font-size: ${(props) => props.$notebookFontSize};
    line-height: ${(props) => props.$notebookLineHeight};
    text-decoration: ${(props) => props.$notebookTextDecoration};
    word-break: ${(props) => props.$notebookWordBreak || "break-all"};
    letter-spacing: ${(props) => props.$notebookLetterSpace};

    ${(props) =>
      props.$notebookLineClamp &&
      `
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props.$notebookLineClamp};
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: ${props.$notebookLineClamp};
  display: -ms-box;
  -ms-box-orient: vertical;
  -ms-line-clamp: ${props.$notebookLineClamp};
  `}
  }
`;

export default font;
