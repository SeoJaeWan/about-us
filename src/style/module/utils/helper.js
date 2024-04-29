import { media } from "@/style/theme/theme";
import { css } from "styled-components";

const generateResponsiveStyles = (properties) => css`
  ${(props) =>
    properties.reduce((acc, { key, value, isClamp }) => {
      if (!props[`$${value}`]) return acc;

      if (isClamp && props[`$${value}`]) {
        return (
          acc +
          `
          ${key}: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${props[`$${value}`]};
          display: -moz-box;
          -moz-box-orient: vertical;
          -moz-line-clamp: ${props[`$${value}`]};
          display: -ms-box;
          -ms-box-orient: vertical;
          -ms-line-clamp: ${props[`$${value}`]};
        `
        );
      }
      return acc + `${key}: ${props[`$${value}`]};`;
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
