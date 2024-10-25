"use client";
import Content from "@/components/atoms/common/content/content";
import Layout from "@/components/atoms/common/layout/layout";
import SubTitle from "@/components/atoms/common/subTitle/subTitle";
import Title from "@/components/atoms/common/title/title";
import ToGo from "@/components/atoms/common/toGo/toGo";
import EmailAnimation from "@/components/molecules/contact/emailAnimation";
import { realColor } from "@/style/theme/theme";
import toRem from "@/style/utils/toRem";
import { useEffect, useRef } from "react";

const Contact = () => {
  const baseRef = useRef<HTMLDivElement>();
  const backgroundRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const contactAnimation = () => {
      const { top, height } = baseRef.current.getBoundingClientRect();
      const start = height / 3;

      const percent = (((start - top) / start) * 100) / 100;

      backgroundRef.current.style.opacity = percent.toString();

      const emailElemList = document.querySelectorAll(".email");

      if (percent >= 0.85) {
        emailElemList.forEach((elem) => elem.classList.add("animation"));
      } else {
        emailElemList.forEach((elem) => elem.classList.remove("animation"));
      }
    };

    window.addEventListener("scroll", contactAnimation);
    contactAnimation();

    return () => {
      window.removeEventListener("scroll", contactAnimation);
    };
  }, []);

  return (
    <Layout as="article" position={"relative"} height={"100vh"} ref={baseRef}>
      <Layout
        position={"fixed"}
        bottom={"0"}
        left={"0"}
        zIndex={"1"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        width={"100vw"}
        height={"100vh"}
        padding={"0 12vw"}
        opacity={"0"}
        backgroundColor={realColor.white}
        ref={backgroundRef}
      >
        <Title fontSize={toRem(18)} fontWeight={500} color={realColor.gray2}>
          CONTACT
        </Title>
        <Content>서재완에 대해 더 알고 싶으신가요?</Content>

        <EmailAnimation email={"sjw7324@gmail.com"} />

        <Layout
          display={"flex"}
          gap={"50px"}
          width={"100%"}
          marginTop={toRem(50)}
        >
          <Layout width={"calc(100% / 2 - 30px)"}>
            <Content lineHeight={toRem(30)}>
              성장 중인 개발자를 찾으시나요? 언제나 새로운 도전을 두려워하지
              않는 개발자입니다. 메일을 보내주시면 1~2일 내로 성심성의껏
              확인하고 답장드리겠습니다. 함께할 수 있길 기대합니다.
            </Content>

            <ToGo href="mailto:sjw7324@gmail.com">메일 보내기</ToGo>
          </Layout>

          <Layout width={"calc(100% / 2 - 30px)"}>
            <Content lineHeight={toRem(30)}>
              인간 서재완이 궁금하셔도 좋아요. 커피챗 중독자로서 언제든지 대화를
              나눌 준비가 되어 있어요. 대화를 통해 서로 배우고 성장할 수 있는
              기회라면 언제든 환영입니다.
            </Content>

            <Content fontSize={toRem(16)}>
              현재 거주지 : <strong>대구</strong>
            </Content>
          </Layout>
        </Layout>

        <p></p>
      </Layout>
    </Layout>
  );
};

export default Contact;
