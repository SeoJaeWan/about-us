import createStyle, { GetStyleProps } from "@/style/v1/module/createStyle";
import display from "@/style/v1/module/styles/display";
import font from "@/style/v1/module/styles/font";
import interval from "@/style/v1/module/styles/interval";
import toRem from "@/style/v1/utils/toRem";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([display, interval, font]);

const TitleContainer = styled.h2`
  margin: 5px 0 10px;

  font-weight: 800;
  font-size: ${toRem(36)};

  ${cssStyle}
`;

type TitleStyleType = typeof TitleContainer & GetStyleProps;

const TitleStyle = TitleContainer as TitleStyleType;

TitleStyle.getStyleProps = getStyleProps;

export default TitleStyle;
