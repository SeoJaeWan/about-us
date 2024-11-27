import createStyle, { GetStyleProps } from "@/style/v1/module/createStyle";
import font from "@/style/v1/module/styles/font";
import interval from "@/style/v1/module/styles/interval";
import toRem from "@/style/v1/utils/toRem";
import styled, { css } from "styled-components";

const { cssStyle, getStyleProps } = createStyle([interval, font]);

type ContentProps = {
  $isClamp?: boolean;
  $clamp?: number;
};

const ContentContainer = styled.p<ContentProps>`
  display: block;

  margin: 20px 0;

  font-weight: 400;
  font-size: ${toRem(20)};

  ${(props) =>
    props.$isClamp
      ? css`
          line-clamp: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${props.$clamp};
          display: -moz-box;
          -moz-box-orient: vertical;
          -moz-line-clamp: ${props.$clamp};
          display: -ms-box;
          -ms-box-orient: vertical;
          -ms-line-clamp: ${props.$clamp};
        `
      : ``}

  ${cssStyle}
`;

type ContentStyleType = typeof ContentContainer & GetStyleProps;

const ContentStyle = ContentContainer as ContentStyleType;

ContentStyle.getStyleProps = getStyleProps;

export default ContentStyle;
