import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import Link from "next/link";
import styled from "styled-components";

const ContentContainer = styled.li`
  border-bottom: 1px solid ${realColor.black};

  &:last-child {
    border-bottom: none;
  }
`;

const ContentBox = styled(Link)`
  display: flex;
  gap: ${toRem(30)};

  padding: ${toRem(80)} 0;
`;

type ContentStyleType = typeof ContentContainer & {
  Box: typeof ContentBox;
};

const ContentStyle = ContentContainer as ContentStyleType;

ContentStyle.Box = ContentBox;

export default ContentStyle;
