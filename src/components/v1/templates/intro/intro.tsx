import Layout from "@/components/v1/atoms/common/layout/layout";
import IntroAnimation from "@/components/v1/organisms/intro/introAnimation/introAnimation";
import { realColor } from "@/style/v1/theme/theme";

const Intro = () => {
  return (
    <Layout
      as="article"
      position={"relative"}
      zIndex={"3"}
      backgroundColor={realColor.white}
      height={"100vh"}
    >
      <IntroAnimation />
    </Layout>
  );
};

export default Intro;
