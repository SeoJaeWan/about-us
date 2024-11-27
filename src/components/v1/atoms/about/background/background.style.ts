import { realColor } from "@/style/v1/theme/theme";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh + 100vh * (6 / 7));

  background-color: ${realColor.background};

  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    height: calc(80vh + 80vh * (6 / 7));
  }
`;

export default BackgroundStyle;
