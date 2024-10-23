"use client";
import Image from "next/image";
import ToGoStyle from "./toGo.style";
import TogoIcon from "@/assets/images/toGo.svg";
import { forwardRef, ReactNode } from "react";

interface ToGoProps extends React.HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

const ToGo = forwardRef<HTMLAnchorElement, ToGoProps>((props, ref) => {
  const { href, children } = props;
  const styleProps = ToGoStyle.getStyleProps(props);

  return (
    <ToGoStyle href={href} target={"_blank"} {...styleProps} ref={ref}>
      {children}

      <Image src={TogoIcon} alt={""} width={19} height={19} />
    </ToGoStyle>
  );
});

export default ToGo;
