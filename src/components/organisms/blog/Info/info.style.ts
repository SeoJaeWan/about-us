import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import styled from "styled-components";

const InfoContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  padding: 25vh 5vw 0;

  width: 40%;
  height: 100vh;

  background-color: ${realColor.background};

  @media (max-width: ${(props) => props.theme.media.tablet}px) {
    position: relative;
    top: inherit;
    left: inherit;

    width: 100%;
    height: auto;

    padding: 10vh 5vw;
  }
`;

const InfoStyleHeader = styled.h2`
  display: flex;
  align-items: end;

  span {
    font-size: ${toRem(36)};
    font-weight: 900;

    font-family: var(--font-concertone);

    color: ${realColor.white};
    padding-bottom: 4px;
  }
`;

const InfoStyleContent = styled.p`
  margin-top: ${toRem(50)};
  margin-bottom: ${toRem(200)};

  font-size: ${toRem(20)};
  font-weight: 600;
  line-height: ${toRem(40)};

  color: ${realColor.white};

  @media (max-width: ${(props) => props.theme.media.tablet}px) {
    margin-bottom: ${toRem(100)};
  }
`;

type InfoStyleType = typeof InfoContainer & {
  Header: typeof InfoStyleHeader;
  Content: typeof InfoStyleContent;
};

const InfoStyle = InfoContainer as InfoStyleType;

InfoStyle.Header = InfoStyleHeader;
InfoStyle.Content = InfoStyleContent;

export default InfoStyle;
