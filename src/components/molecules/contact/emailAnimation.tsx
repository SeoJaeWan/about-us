import SubTitle from "@/components/atoms/common/subTitle/subTitle";
import toRem from "@/style/utils/toRem";
import React from "react";
import EmailAnimationStyle from "./emailAnimation.style";

const EmailAnimation = (props) => {
  const { email } = props;

  return (
    <SubTitle
      fontSize={"8vw"}
      letterSpacing={"-4px"}
      mobileFontSize={"10vw"}
      mobileLetterSpacing={"-2px"}
    >
      {email.split("").map((str, idx) => (
        <EmailAnimationStyle key={idx} className="email" $delay={idx / 20}>
          {str}
        </EmailAnimationStyle>
      ))}
    </SubTitle>
  );
};

export default EmailAnimation;
