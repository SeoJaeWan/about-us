import createStyle from "@/style/module/createStyle";
import display from "@/style/module/styles/display";
import interval from "@/style/module/styles/interval";
import size from "@/style/module/styles/size";
import styled from "styled-components";

const { cssStyle, getStyleProps } = createStyle([display, interval, size]);

const LayoutContainer = styled.div`
  ${cssStyle}
`;

export default LayoutContainer;
