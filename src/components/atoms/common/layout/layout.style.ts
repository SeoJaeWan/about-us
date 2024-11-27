import createStyle, { GetStyleProps } from "@/style/module/createStyle";
import background from "@/style/module/styles/background";
import border from "@/style/module/styles/border";
import display from "@/style/module/styles/display";
import interval from "@/style/module/styles/interval";
import other from "@/style/module/styles/other";
import position from "@/style/module/styles/position";
import size from "@/style/module/styles/size";
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
