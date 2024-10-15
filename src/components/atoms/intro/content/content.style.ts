import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import font from "@/style/module/styles/font";
import interval from "@/style/module/styles/interval";
import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([interval, font]);

const ContentContainer = styled.span`
  display: block;

  margin: 20px 0;

  font-weight: 400;
  font-size: ${toRem(20)};

  ${cssStyle}
`;

type ContentStyleType = typeof ContentContainer & GetStyleProps;

const ContentStyle = ContentContainer as ContentStyleType;

ContentStyle.getStyleProps = getStyleProps;

export default ContentStyle;
