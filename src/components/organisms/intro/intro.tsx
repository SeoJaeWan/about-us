import Content from "@/components/atoms/intro/content/content";
import Layout from "@/components/atoms/common/layout/layout";
import toRem from "@/style/utils/toRem";
import IntroImage from "@/components/molecules/intro/introImage/introImage";
import FadeUp from "@/components/atoms/common/fadeUp/fadeUp";

const Intro = () => {
  return (
    <Layout
      as="article"
      padding={`calc(${toRem(46)} + 4vw + ${toRem(100)}) 5vw`}
    >
      <IntroImage />

      <FadeUp isObserving={false} delay={0.2}>
        <Content textAlign="center" marginTop="60px">
          매 작업에서 배움을 찾으며, 즐기는 마음으로 개발을 하고 있는
          서재완입니다.
        </Content>
        <Content textAlign="center">
          중복을 싫어하며, 직관적이고 이해하기 쉬운 코드를 작성하는 것을 목표로
          해요.
        </Content>
        <Content textAlign="center">
          어려운 문제에 스트레스보단 해결했을 때의 즐거움을 더 크게 느낍니다.
        </Content>
      </FadeUp>
    </Layout>
  );
};

export default Intro;
