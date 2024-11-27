import createStyle, { GetStyleProps } from "@/style/v1/module/createStyle";
import background from "@/style/v1/module/styles/background";
import border from "@/style/v1/module/styles/border";
import display from "@/style/v1/module/styles/display";
import interval from "@/style/v1/module/styles/interval";
import other from "@/style/v1/module/styles/other";
import position from "@/style/v1/module/styles/position";
import size from "@/style/v1/module/styles/size";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([
  position,
  display,
  border,
  interval,
  size,
  background,
  other,
]);

const LayoutContainer = styled.div`
  ${cssStyle}
`;

type LayoutStyleType = typeof LayoutContainer & GetStyleProps;

const LayoutStyle = LayoutContainer as LayoutStyleType;

LayoutStyle.getStyleProps = getStyleProps;

export default LayoutStyle;
