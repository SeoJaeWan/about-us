"use client";
import Layout from "@/components/atoms/common/layout/layout";
import Profile from "@/assets/images/profile.png";
import Logo from "@/assets/images/logo.svg";
import Image from "@/components/atoms/common/image/image";
import toRem from "@/style/utils/toRem";
import { realColor } from "@/style/theme/theme";
import Title from "@/components/atoms/intro/title/title";
import Content from "@/components/atoms/intro/content/content";
import ToGo from "@/components/atoms/common/toGo/toGo";

const About = () => {
  return (
    <Layout display={"flex"} justifyContent={"center"} padding={"5vw"}>
      <Layout width={"40%"} display={"flex"} justifyContent={"center"}>
        <Image
          src={Profile}
          alt={""}
          width={toRem(350)}
          height={"auto"}
          aspectRatio={"966/1480"}
          borderRadius={"10px"}
          border={`1px solid ${realColor.black}`}
        />
      </Layout>
      <Layout width={"50%"} marginLeft={"10px"} paddingTop={toRem(20)}>
        <Title
          display={"flex"}
          alignItems={"center"}
          gap={toRem(5)}
          fontSize={toRem(20)}
          fontWeight={"400"}
          letterSpacing={toRem(-2)}
        >
          ABOUT
          <Image
            display={"inline-block"}
            src={Logo}
            width={"auto"}
            height={"19px"}
            aspectRatio={"899/147"}
          />
        </Title>
        <Content lineHeight={toRem(30)}>
          안녕하세요. 프론트엔드 개발자 서재완입니다!
          <br />
          낯선 기능에 설렘을 가지며 즐거운 개발을 하고 있습니다.
        </Content>
        <Content lineHeight={toRem(30)}>
          React와 Next.js 환경에서 컴포넌트 단위 개발을 하고 있어요. 어떤 방법을
          사용해야 개발자가 편한 환경에서 개발을 할 수 있을지 고려하며 개발을
          하고 있습니다.
        </Content>
        <Content lineHeight={toRem(30)}>
          서비스의 완성을 위해서는 팀원과의 소통이 중요하다고 생각해요. 혼자
          앞서나가는 것이 아닌 전체의 전투력 상승에 관심이 많습니다. 🤔
        </Content>
        <Content lineHeight={toRem(30)}>
          개발 말고도 해외(일본)여행, 평생을 함께할 취미를 찾기 위해서 즐거운
          취미 찾기에도 열심히 하고 있어요.
        </Content>

        <ToGo
          marginTop={toRem(50)}
          href={
            "https://gamy-wasp-3db.notion.site/111c97bafd8980918340fb21c4f94063?pvs=4"
          }
        >
          자기소개 더보기
        </ToGo>
      </Layout>
    </Layout>
  );
};

export default About;
