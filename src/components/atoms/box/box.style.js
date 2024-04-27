import styled from "styled-components";
import background from "@/style/module/background";
import border from "@/style/module/border";
import display from "@/style/module/display";
import interval from "@/style/module/interval";
import overflow from "@/style/module/overflow";
import position from "@/style/module/position";
import size from "@/style/module/size";
import transform from "@/style/module/tansform";

const BoxStyle = styled.div`
  ${display};
  ${background};
  ${border};
  ${interval};
  ${overflow};
  ${position};
  ${size};
  ${transform}
`;

export default BoxStyle;
