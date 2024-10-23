"use client";
import Layout from "@/components/atoms/common/layout/layout";
import { realColor } from "@/style/theme/theme";
import AboutContent from "@/components/molecules/about/aboutContent/aboutContent";
import AboutImage from "@/components/molecules/about/aboutImage/aboutImage";
import Background from "@/components/atoms/about/background/background";

const About = () => {
  return (
    <Layout
      as={"article"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"0 5vw"}
      height={"100vh"}
      backgroundColor={realColor.white}
    >
      <Background />
      <AboutImage />
      <AboutContent />
    </Layout>
  );
};

export default About;
