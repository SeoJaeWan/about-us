import { media } from "@/style/theme/theme";
import { css } from "styled-components";

const generateResponsiveStyles = (properties) => css`
  ${(props) =>
    properties.reduce((acc, { key, value }) => {
      const styleValue = props[`$${value}`];

      if (!styleValue) return acc;
      return acc + `${key}: ${styleValue};`;
    }, "")}
`;

const toValueUpperCase = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const createMediaQuery = (breakpoint, properties) => css`
  @media (max-width: ${(props) => props.theme.media[breakpoint]}px) {
    ${generateResponsiveStyles(
      properties.map(({ key, value }) => ({
        key,
        value: `${breakpoint}${toValueUpperCase(value)}`,
      }))
    )}
  }
`;

const generateMediaResponsiveStyles = (properties) => {
  const medias = Object.keys(media);
  return css`
    ${generateResponsiveStyles(properties)}
    ${medias.map((breakpoint) => createMediaQuery(breakpoint, properties))}
  `;
};

export default generateMediaResponsiveStyles;
