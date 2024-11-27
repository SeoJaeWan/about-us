import Layout from "@/components/v1/atoms/common/layout/layout";
import Title from "@/components/v1/atoms/common/title/title";
import toRem from "@/style/v1/utils/toRem";
import Logo from "../../common/logo/logo";
import Content from "@/components/v1/atoms/common/content/content";
import ToGo from "@/components/v1/atoms/common/toGo/toGo";
import { useRef } from "react";
import useFadeUpRef from "@/hooks/v1/useFadeUpRef/useFadeUpRef";
import { realColor } from "@/style/v1/theme/theme";

const AboutContent = () => {
  const boxRef = useRef();
  const titleRef = useFadeUpRef(boxRef);
  const contentRef = useFadeUpRef(boxRef);
  const linkRef = useFadeUpRef<HTMLAnchorElement>(boxRef);

  return (
    <Layout
      width={"50%"}
      marginLeft={"10px"}
      paddingTop={toRem(20)}
      tabletMarginLeft={"0"}
      tabletWidth={"80%"}
      mobileWidth={"100%"}
      ref={boxRef}
    >
      <Title
        ref={titleRef}
        display={"flex"}
        alignItems={"center"}
        gap={toRem(5)}
        fontSize={toRem(20)}
        fontWeight={"400"}
        letterSpacing={"-2px"}
        color={realColor.white}
      >
        ABOUT
        <Logo width={"auto"} height={"19px"} />
      </Title>

      <Layout ref={contentRef}>
        <Content
          lineHeight={toRem(20)}
          mobileFontSize={toRem(16)}
          color={realColor.white}
        >
          안녕하세요. 프론트엔드 개발자 서재완입니다!
          <br />
          낯선 기능에 설렘을 가지며 즐거운 개발을 하고 있습니다.
        </Content>
        <Content
          lineHeight={toRem(20)}
          mobileFontSize={toRem(16)}
          color={realColor.white}
        >
          React와 Next.js 환경에서 컴포넌트 단위 개발을 하고 있어요. 어떤 방법을
          사용해야 개발자가 편한 환경에서 개발을 할 수 있을지 고려하며 개발을
          하고 있습니다.
        </Content>
        <Content
          lineHeight={toRem(20)}
          mobileFontSize={toRem(16)}
          color={realColor.white}
        >
          서비스의 완성을 위해서는 팀원과의 소통이 중요하다고 생각해요. 혼자
          앞서나가는 것이 아닌 전체의 전투력 상승에 관심이 많습니다. 🤔
        </Content>
        <Content
          lineHeight={toRem(20)}
          mobileFontSize={toRem(16)}
          color={realColor.white}
        >
          개발 말고도 해외(일본)여행, 평생을 함께할 취미를 찾기 위해서 즐거운
          취미 찾기에도 열심히 하고 있어요.
        </Content>
      </Layout>

      <ToGo
        marginTop={toRem(50)}
        ref={linkRef}
        isWhite
        href={
          "https://gamy-wasp-3db.notion.site/111c97bafd8980918340fb21c4f94063?pvs=4"
        }
      >
        자기소개 더보기
      </ToGo>
    </Layout>
  );
};

export default AboutContent;
