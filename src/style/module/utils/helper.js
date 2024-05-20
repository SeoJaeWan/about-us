import { media } from "@/style/theme/theme";
import { css } from "styled-components";

const generateResponsiveStyles = (properties) => css`
  ${(props) =>
    properties.reduce(
      (acc, { key, value, isClamp, isCenter, isCenterX, isCenterY }) => {
        const styleValue = props[`$${value}`];

        if (!styleValue) return acc;

        if (isCenter && styleValue) {
          return (
            acc +
            `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            `
          );
        }

        if (isCenterX && styleValue) {
          return (
            acc +
            `
            left: 50%;
            transform: translateX(-50%);
            `
          );
        }

        if (isCenterY && styleValue) {
          return (
            acc +
            `
            top: 50%;
            transform: translateY(-50%);    
            `
          );
        }

        if (isClamp && styleValue) {
          return (
            acc +
            `
          ${key}: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${styleValue};
          display: -moz-box;
          -moz-box-orient: vertical;
          -moz-line-clamp: ${styleValue};
          display: -ms-box;
          -ms-box-orient: vertical;
          -ms-line-clamp: ${styleValue};
        `
          );
        }
        return acc + `${key}: ${styleValue};`;
      },
      ""
    )}
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
