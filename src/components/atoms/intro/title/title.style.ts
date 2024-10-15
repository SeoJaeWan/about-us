import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import font from "@/style/module/styles/font";
import interval from "@/style/module/styles/interval";
import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([interval, font]);

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
