import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import font from "@/style/module/styles/font";
import interval from "@/style/module/styles/interval";
import size from "@/style/module/styles/size";
import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([size, interval, font]);

const SubTitleContainer = styled.strong`
  font-weight: 600;
  font-size: ${toRem(20)};

  ${cssStyle}
`;

type SubTitleStyleType = typeof SubTitleContainer & GetStyleProps;

const SubTitleStyle = SubTitleContainer as SubTitleStyleType;

SubTitleStyle.getStyleProps = getStyleProps;

export default SubTitleStyle;
