import Image from "@/components/atoms/common/image/image";
import Layout from "@/components/atoms/common/layout/layout";
import toRem from "@/style/utils/toRem";
import Profile from "@/assets/images/profile.png";
import { realColor } from "@/style/theme/theme";
import { useRef } from "react";
import useFadeUpRef from "@/hooks/useFadeUpRef/useFadeUpRef";

const AboutImage = () => {
  const boxRef = useRef();
  const imageRef = useFadeUpRef<HTMLImageElement>(boxRef);

  return (
    <Layout
      width={"40%"}
      maxWidth={toRem(500)}
      display={"flex"}
      justifyContent={"center"}
      ref={boxRef}
    >
      <Image
        src={Profile}
        alt={""}
        width={toRem(350)}
        height={"auto"}
        aspectRatio={"966/1480"}
        borderRadius={"10px"}
        border={`1px solid ${realColor.black}`}
        ref={imageRef}
      />
    </Layout>
  );
};

export default AboutImage;
