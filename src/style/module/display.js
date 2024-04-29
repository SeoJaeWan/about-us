import { css } from "styled-components";

const display = css`
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};

  flex-wrap: ${(props) => props.$flexWrap};
  flex-direction: ${(props) => props.$flexDirection};

  order: ${(props) => props.$order};

  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  grid-template-rows: ${(props) => props.$gridTemplateRows};

  gap: ${(props) => props.$gap};

  /* mobile */
  @media (max-width: ${(props) => props.theme.mobile}) {
    display: ${(props) => props.$mobileDisplay};
    justify-content: ${(props) => props.$mobileJustifyContent};
    align-items: ${(props) => props.$mobileAlignItems};

    flex-wrap: ${(props) => props.$mobileFlexWrap};
    flex-direction: ${(props) => props.$mobileFlexDirection};

    order: ${(props) => props.$mobileOrder};

    grid-template-columns: ${(props) => props.$mobileGridTemplateColumns};
    grid-template-rows: ${(props) => props.$mobileGridTemplateRows};

    gap: ${(props) => props.$mobileGap};
  }

  /* tablet */
  @media (max-width: ${(props) => props.theme.tablet}) {
    display: ${(props) => props.$tabletDisplay};
    justify-content: ${(props) => props.$tabletJustifyContent};
    align-items: ${(props) => props.$tabletAlignItems};

    flex-wrap: ${(props) => props.$tabletFlexWrap};
    flex-direction: ${(props) => props.$tabletFlexDirection};

    order: ${(props) => props.$tabletOrder};

    grid-template-columns: ${(props) => props.$tabletGridTemplateColumns};
    grid-template-rows: ${(props) => props.$tabletGridTemplateRows};

    gap: ${(props) => props.$tabletGap};
  }

  /* notebook */
  @media (max-width: ${(props) => props.theme.notebook}) {
    display: ${(props) => props.$notebookDisplay};
    justify-content: ${(props) => props.$notebookJustifyContent};
    align-items: ${(props) => props.$notebookAlignItems};

    flex-wrap: ${(props) => props.$notebookFlexWrap};
    flex-direction: ${(props) => props.$notebookFlexDirection};

    order: ${(props) => props.$notebookOrder};

    grid-template-columns: ${(props) => props.$notebookGridTemplateColumns};
    grid-template-rows: ${(props) => props.$notebookGridTemplateRows};

    gap: ${(props) => props.$notebookGap};
  }
`;

export default display;
