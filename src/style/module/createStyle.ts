import _ from "lodash";
import { css } from "styled-components";
import generateMediaResponsiveStyles from "./utils/helper";
import { media } from "../theme/theme";

type StyleProperty = {
  key: string;
  value: string;
};

type Props = Record<string, any>;

const lowerFirstLetter = (value: string) => {
  return value.charAt(0).toLowerCase() + value.slice(1);
};

export type GetStyleProps = {
  getStyleProps: (props: Props) => Props;
};

const createStyle = (styles: StyleProperty[][]) => {
  const styleProperties: StyleProperty[] = _.flatMap(styles);

  const cssStyle = styles.reduce(
    (acc, cur) =>
      css`
        ${generateMediaResponsiveStyles(cur)};
        ${acc}
      `,
    {}
  );

  const getStyleProps = (props: Props): Props => {
    return Object.entries(props).reduce((acc, [key, value]) => {
      const property = styleProperties.find((style) => {
        return style.value === key;
      });

      if (property) {
        return {
          ...acc,
          [`$${key}`]: value,
        };
      }

      const mediaProps = Object.keys(media);
      for (const prefix of mediaProps) {
        if (key.startsWith(prefix)) {
          const baseKey = lowerFirstLetter(key.slice(prefix.length));

          const mediaProperty = styleProperties.find(
            (style) => style.value === baseKey
          );
          if (mediaProperty) {
            return {
              ...acc,
              [`$${key}`]: value,
            };
          }
        }
      }

      return acc;
    }, {});
  };

  return { cssStyle, getStyleProps };
};

export default createStyle;
