import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 5vw;

  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FooterLeft = styled.p`
  width: 20%;

  font-family: var(--font-concertone);

  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    width: 100%;

    text-align: center;
  }
`;

const FooterRight = styled.p`
  width: 20%;
`;

const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    width: 100%;
  }
`;

type FooterStyleType = typeof FooterContainer & {
  FooterLeft: typeof FooterLeft;
  FooterRight: typeof FooterRight;
  FooterCenter: typeof FooterCenter;
};

const FooterStyle = FooterContainer as FooterStyleType;

FooterStyle.FooterLeft = FooterLeft;
FooterStyle.FooterRight = FooterRight;
FooterStyle.FooterCenter = FooterCenter;

export default FooterStyle;
