import Image from "@/components/atoms/common/image/image";
import Layout from "@/components/atoms/common/layout/layout";
import toRem from "@/style/utils/toRem";
import Profile from "@/assets/images/profile.png";
import { realColor } from "@/style/theme/theme";
import { useRef } from "react";
import useFadeUpRef from "@/hooks/useFadeUpRef/useFadeUpRef";

const AboutImage = () => {
  const boxRef = useRef();
  const imageRef = useFadeUpRef<HTMLImageElement>(
    boxRef,
    "fadeUpOpacity--ref",
    "fadeUpOpacityReverse--ref"
  );

  return (
    <Layout
      width={"40%"}
      maxWidth={toRem(500)}
      display={"flex"}
      justifyContent={"center"}
      ref={boxRef}
      tabletPosition={"absolute"}
      tabletLeft={"50px"}
      tabletTop={"100px"}
      mobileTop={"00px"}
    >
      <Image
        src={Profile}
        alt={""}
        width={toRem(350)}
        height={"auto"}
        aspectRatio={"966/1480"}
        borderRadius={"12px"}
        border={`1px solid ${realColor.white}`}
        mobileWidth={toRem(200)}
        ref={imageRef}
      />
    </Layout>
  );
};

export default AboutImage;
