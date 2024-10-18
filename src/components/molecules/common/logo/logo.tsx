import LogoImage from "@/assets/images/logo.svg";
import Image from "@/components/atoms/common/image/image";

type LogoProps = {
  width: string;
  height: string;
};

const Logo = (props: LogoProps) => {
  const { width, height } = props;

  return (
    <Image
      display={"inline-block"}
      src={LogoImage}
      alt={"SeoJaeWan"}
      width={width}
      height={height}
      aspectRatio={"899/147"}
    />
  );
};

export default Logo;
