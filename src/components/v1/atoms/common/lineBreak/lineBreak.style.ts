import styled from "styled-components";

type LineBreakStyleProps = {
  $isShow: boolean;
  $isTabletShow: boolean;
  $isMobileShow: boolean;
};

const LineBreakStyle = styled.br<LineBreakStyleProps>`
  display: ${(props) => (props.$isShow ? "block" : "none")};

  @media (max-width: ${(props) => props.theme.media.tablet}px) {
    display: ${(props) => (props.$isTabletShow ? "block" : "none")};
  }

  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    display: ${(props) => (props.$isMobileShow ? "block" : "none")};
  }
`;

export default LineBreakStyle;
