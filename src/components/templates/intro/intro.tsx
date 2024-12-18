import Layout from "@/components/atoms/common/layout/layout";
import IntroAnimation from "@/components/organisms/intro/introAnimation/introAnimation";
import { realColor } from "@/style/theme/theme";

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
