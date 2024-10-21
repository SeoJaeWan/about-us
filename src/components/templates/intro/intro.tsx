import Layout from "@/components/atoms/common/layout/layout";
import IntroContent from "@/components/molecules/intro/introContent/introContent";
import IntroImage from "@/components/molecules/intro/introImage/introImage";
import { realColor } from "@/style/theme/theme";

const Intro = () => {
  return (
    <Layout
      as="article"
      display={"flex"}
      alignItem={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      padding={`0 5vw`}
      backgroundColor={realColor.white}
      height={"100vh"}
    >
      <IntroImage />

      <IntroContent />
    </Layout>
  );
};

export default Intro;
