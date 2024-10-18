import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import Link from "next/link";
import styled from "styled-components";

type PortfolioItemContainerProps = {
  $isLeft: boolean;
};

const PortfolioItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const PortfolioItemShadow = styled.div`
  position: absolute;
  top: 60px;
  left: 30px;

  z-index: -1;

  width: 100%;
  height: ${toRem(360)};

  border-radius: 30px;

  background-color: ${realColor.shadow};

  transition: all 0.5s;
  opacity: 0.8;
`;

const PortfolioItemContainer = styled.li<PortfolioItemContainerProps>`
  align-self: ${(props) => (props.$isLeft ? "flex-start" : "flex-end")};

  position: relative;

  width: ${toRem(400)};
  height: ${toRem(400)};

  &:hover ${PortfolioItemShadow} {
    opacity: 0.9;
  }
`;

type PortfolioItemImageBoxProps = {
  $backgroundColor: string;
};

const PortfolioItemImageBox = styled.div<PortfolioItemImageBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
  aspect-ratio: 4/3;

  border: 1px solid ${realColor.gray1};
  border-radius: 30px;

  background-color: ${(props) => props.$backgroundColor};
`;

const PortfolioItemInfoBox = styled.div`
  margin-top: ${toRem(20)};
  height: ${toRem(70)};

  p {
    margin-top: 10px;

    font-size: ${toRem(24)};
    font-weight: 500;

    color: ${realColor.gray2};
  }

  h3 {
    display: flex;
    align-items: flex-start;

    font-size: ${toRem(40)};
    font-weight: 700;
    color: ${realColor.black};

    span {
      font-size: ${toRem(20)};
      font-weight: 500;
    }
  }
`;

type PortfolioItemStyleType = typeof PortfolioItemContainer & {
  Link: typeof PortfolioItemLink;
  ImageBox: typeof PortfolioItemImageBox;
  Shadow: typeof PortfolioItemShadow;
  InfoBox: typeof PortfolioItemInfoBox;
};

const PortfolioItemStyle = PortfolioItemContainer as PortfolioItemStyleType;

PortfolioItemStyle.Link = PortfolioItemLink;
PortfolioItemStyle.ImageBox = PortfolioItemImageBox;
PortfolioItemStyle.Shadow = PortfolioItemShadow;
PortfolioItemStyle.InfoBox = PortfolioItemInfoBox;

export default PortfolioItemStyle;
