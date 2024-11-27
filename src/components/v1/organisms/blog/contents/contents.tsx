"use client";

import Image from "@/components/v1/atoms/common/image/image";
import Layout from "@/components/v1/atoms/common/layout/layout";
import { BlogDataType } from "@/components/v1/templates/blog/blog";
import { realColor } from "@/style/theme/theme";
import ContentStyle from "./contents.style";
import Title from "@/components/v1/atoms/common/title/title";
import toRem from "@/style/utils/toRem";
import Content from "@/components/v1/atoms/common/content/content";
import SubTitle from "@/components/v1/atoms/common/subTitle/subTitle";

type ContentsProps = {
  blogData: BlogDataType[];
};

const Contents = (props: ContentsProps) => {
  const { blogData } = props;

  return (
    <ContentStyle>
      {blogData.map(({ title, createdAt, link, content, thumbnail }) => (
        <ContentStyle.Item key={title}>
          <ContentStyle.Link href={link} target={"_blank"}>
            <Image
              src={thumbnail}
              alt={""}
              width={340}
              height={220}
              objectFit={"cover"}
              border={`2px solid ${realColor.gray1}`}
              borderRadius={"20px"}
              mobileWidth={"100%"}
              mobileHeight={"181px"}
            />

            <Layout
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              width={"calc(100% - 340px - 30px)"}
              mobileWidth={"100%"}
            >
              <SubTitle
                fontSize={toRem(16)}
                color={realColor.gray2}
                mobileFontSize={toRem(12)}
              >
                {createdAt}
              </SubTitle>

              <Title
                as="h3"
                fontSize={toRem(24)}
                mobileFontSize={toRem(18)}
                wordBreak={"break-all"}
              >
                {title}
              </Title>

              <Content
                fontSize={toRem(20)}
                lineHeight={toRem(28)}
                isClamp
                clamp={4}
                marginTop={`${toRem(20)} 0 0`}
                mobileLineHeight={toRem(20)}
                mobileFontSize={toRem(14)}
                mobileMargin={`0`}
              >
                {content}
              </Content>
            </Layout>
          </ContentStyle.Link>
        </ContentStyle.Item>
      ))}
    </ContentStyle>
  );
};

export default Contents;
