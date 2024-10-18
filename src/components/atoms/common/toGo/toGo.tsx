"use client";
import Image from "next/image";
import ToGoStyle from "./toGo.style";
import TogoIcon from "@/assets/images/toGo.svg";

const ToGo = (props) => {
  const { href, children } = props;
  const styleProps = ToGoStyle.getStyleProps(props);

  return (
    <ToGoStyle href={href} target={"_blank"} {...styleProps}>
      {children}

      <Image src={TogoIcon} alt={""} width={19} height={19} />
    </ToGoStyle>
  );
};

export default ToGo;
