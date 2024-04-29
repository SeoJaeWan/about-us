import { css } from "styled-components";

const interval = css`
  margin: ${(props) => props.$margin};
  margin-top: ${(props) => props.$marginTop};
  margin-left: ${(props) => props.$marginLeft};
  margin-bottom: ${(props) => props.$marginBottom};
  margin-right: ${(props) => props.$marginRight};

  padding: ${(props) => props.$padding};
  padding-top: ${(props) => props.$paddingTop};
  padding-left: ${(props) => props.$paddingLeft};
  padding-bottom: ${(props) => props.$paddingBottom};
  padding-right: ${(props) => props.$paddingRight};

  /* mobile */
  @media (max-width: ${(props) => props.theme.mobile}) {
    margin: ${(props) => props.$mobileMargin};
    margin-top: ${(props) => props.$mobileMarginTop};
    margin-left: ${(props) => props.$mobileMarginLeft};
    margin-bottom: ${(props) => props.$mobileMarginBottom};
    margin-right: ${(props) => props.$mobileMarginRight};

    padding: ${(props) => props.$mobilePadding};
    padding-top: ${(props) => props.$mobilePaddingTop};
    padding-left: ${(props) => props.$mobilePaddingLeft};
    padding-bottom: ${(props) => props.$mobilePaddingBottom};
    padding-right: ${(props) => props.$mobilePaddingRight};
  }

  /* tablet */
  @media (max-width: ${(props) => props.theme.tablet}) {
    margin: ${(props) => props.$tabletMargin};
    margin-top: ${(props) => props.$tabletMarginTop};
    margin-left: ${(props) => props.$tabletMarginLeft};
    margin-bottom: ${(props) => props.$tabletMarginBottom};
    margin-right: ${(props) => props.$tabletMarginRight};

    padding: ${(props) => props.$tabletPadding};
    padding-top: ${(props) => props.$tabletPaddingTop};
    padding-left: ${(props) => props.$tabletPaddingLeft};
    padding-bottom: ${(props) => props.$tabletPaddingBottom};
    padding-right: ${(props) => props.$tabletPaddingRight};
  }

  /* notebook */
  @media (max-width: ${(props) => props.theme.notebook}) {
    margin: ${(props) => props.$notebookMargin};
    margin-top: ${(props) => props.$notebookMarginTop};
    margin-left: ${(props) => props.$notebookMarginLeft};
    margin-bottom: ${(props) => props.$notebookMarginBottom};
    margin-right: ${(props) => props.$notebookMarginRight};

    padding: ${(props) => props.$notebookPadding};
    padding-top: ${(props) => props.$notebookPaddingTop};
    padding-left: ${(props) => props.$notebookPaddingLeft};
    padding-bottom: ${(props) => props.$notebookPaddingBottom};
    padding-right: ${(props) => props.$notebookPaddingRight};
  }
`;

export default interval;
