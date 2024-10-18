"use client";

import Image from "@/components/atoms/common/image/image";
import Layout from "@/components/atoms/common/layout/layout";
import { BlogDataType } from "@/components/templates/blog/blog";
import { realColor } from "@/style/theme/theme";
import ContentStyle from "./contents.style";
import Title from "@/components/atoms/common/title/title";
import toRem from "@/style/utils/toRem";
import Content from "@/components/atoms/common/content/content";

type ContentsProps = {
  blogData: BlogDataType[];
};

const Contents = (props: ContentsProps) => {
  const { blogData } = props;

  return (
    <Layout width={"55%"} padding={"3vw 5vw"} as="ul">
      {blogData.map(({ title, createdAt, link, content, thumbnail }) => (
        <ContentStyle key={title}>
          <ContentStyle.Box href={link} target={"_blank"}>
            <Image
              src={thumbnail}
              alt={""}
              width={340}
              height={220}
              objectFit={"cover"}
              border={`2px solid ${realColor.gray1}`}
              borderRadius={"20px"}
            />

            <Layout width={"calc(100% - 340px)"}>
              <Title as="h3" fontSize={toRem(24)}>
                {title}
              </Title>

              <Content fontSize={toRem(18)}>{content}</Content>
            </Layout>
          </ContentStyle.Box>
        </ContentStyle>
      ))}
    </Layout>
  );
};

export default Contents;
