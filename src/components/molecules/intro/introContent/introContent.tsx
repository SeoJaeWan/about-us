"use client";
import Content from "@/components/atoms/common/content/content";
import Layout from "@/components/atoms/common/layout/layout";
import toRem from "@/style/utils/toRem";
import { useRef } from "react";

const IntroContent = () => {
  const ref = useRef();

  return (
    <Layout ref={ref} className="fadeUp--delay">
      <Content
        textAlign="center"
        marginTop="60px"
        mobileFontSize={toRem(18)}
        mobileMargin={"40px 0 10px"}
        mobileTextAlign={"left"}
        mobileLineHeight={toRem(24)}
      >
        매 작업에서 배움을 찾으며, 즐기는 마음으로 개발을 하고 있는
        서재완입니다.
      </Content>
      <Content
        textAlign="center"
        mobileFontSize={toRem(18)}
        mobileMargin={"10px 0"}
        mobileTextAlign={"left"}
        mobileLineHeight={toRem(24)}
      >
        중복을 싫어하며, 직관적이고 이해하기 쉬운 코드를 작성하는 것을 목표로
        해요.
      </Content>
      <Content
        textAlign="center"
        mobileFontSize={toRem(18)}
        mobileMargin={"10px 0"}
        mobileTextAlign={"left"}
        mobileLineHeight={toRem(24)}
      >
        어려운 문제에 스트레스보단 해결했을 때의 즐거움을 더 크게 느낍니다.
      </Content>
    </Layout>
  );
};

export default IntroContent;
