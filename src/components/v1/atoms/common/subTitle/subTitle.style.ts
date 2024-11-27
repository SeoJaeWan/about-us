import createStyle, { GetStyleProps } from "@/style/v1/module/createStyle";
import font from "@/style/v1/module/styles/font";
import interval from "@/style/v1/module/styles/interval";
import size from "@/style/v1/module/styles/size";
import toRem from "@/style/v1/utils/toRem";
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
