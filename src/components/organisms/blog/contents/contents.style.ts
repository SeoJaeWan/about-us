import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import Link from "next/link";
import styled from "styled-components";

const ContentContainer = styled.ul`
  width: 55%;

  padding: 3vw 5vw;

  @media (max-width: ${(props) => props.theme.media.tablet}px) {
    width: 100%;

    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
`;

const ContentItem = styled.li`
  border-bottom: 1px solid ${realColor.black};

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(2n) {
    a {
      flex-direction: row-reverse;
    }

    @media (max-width: ${(props) => props.theme.media.mobile}px) {
      a {
        flex-direction: column;
      }
    }
  }
`;

const ContentLink = styled(Link)`
  display: flex;
  gap: ${toRem(30)};

  padding: ${toRem(80)} 0;

  @media (max-width: ${(props) => props.theme.media.mobile}px) {
    flex-direction: column;
    align-items: center;

    padding: ${toRem(20)} 0;
  }
`;

type ContentStyleType = typeof ContentContainer & {
  Item: typeof ContentItem;
  Link: typeof ContentLink;
};

const ContentStyle = ContentContainer as ContentStyleType;

ContentStyle.Item = ContentItem;
ContentStyle.Link = ContentLink;

export default ContentStyle;
