import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%   { transform:  translateY(0); }
  20%  { transform:  translateY(20px); }
  50%  { transform:  translateY(-45px);}
  80%  { transform:  translateY(10px); }
  100% { transform:  translateY(0);}
`;

type EmailAnimationStyleProps = {
  $delay: number;
};

const EmailAnimationStyle = styled.span<EmailAnimationStyleProps>`
  display: inline-block;

  &.animation {
    animation: ${bounce} 0.6s forwards ease ${(props) => `${props.$delay}s`};
  }
`;

export default EmailAnimationStyle;
