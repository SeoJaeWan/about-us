import LogoImage from "@/assets/v1/images/logo.svg";
import Image from "@/components/v1/atoms/common/image/image";

type LogoProps = {
  width: string;
  height: string;
};

const Logo = (props: LogoProps) => {
  const { width, height, ...rest } = props;

  return (
    <Image
      display={"inline-block"}
      src={LogoImage}
      alt={"SeoJaeWan"}
      width={width}
      height={height}
      aspectRatio={"899/147"}
      {...rest}
    />
  );
};

export default Logo;