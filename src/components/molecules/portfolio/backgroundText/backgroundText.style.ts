import toRem from "@/style/utils/toRem";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%   { transform:  translateY(0); }
  10%  { transform:  translateY(0); }
  30%  { transform:  translateY(-15px);}
  50%  { transform: translateY(0); }
  58%  { transform:  translateY(-1px); }
  65%  { transform:  translateY(0);}
  100% { transform:  translateY(0);}
`;
const BackgroundTextStyle = styled.div`
  position: fixed;
  top: 30vh;
  left: 0;
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${toRem(40)};

  width: 100%;

  padding: ${toRem(10)} ${toRem(50)};

  &.bounce svg {
    path:nth-child(1) {
      animation: ${bounce} 1s forwards ease;
    }
    path:nth-child(2) {
      animation: ${bounce} 1s forwards 0.1s ease;
    }
    path:nth-child(3) {
      animation: ${bounce} 1s forwards 0.2s ease;
    }
    path:nth-child(4) {
      animation: ${bounce} 1s forwards 0.3s ease;
    }
    path:nth-child(5) {
      animation: ${bounce} 1s forwards 0.4s ease;
    }
    path:nth-child(6) {
      animation: ${bounce} 1s forwards 0.5s ease;
    }
    path:nth-child(7) {
      animation: ${bounce} 1s forwards 0.6s ease;
    }
    path:nth-child(8) {
      animation: ${bounce} 1s forwards 0.7s ease;
    }
    path:nth-child(9) {
      animation: ${bounce} 1s forwards 0.8s ease;
    }
    path:nth-child(10) {
      animation: ${bounce} 1s forwards 0.9s ease;
    }
    path:nth-child(11) {
      animation: ${bounce} 1s forwards 1s ease;
    }
    path:nth-child(12) {
      animation: ${bounce} 1s forwards 1.1s ease;
    }
    path:nth-child(13) {
      animation: ${bounce} 1s forwards 1.2s ease;
    }
    path:nth-child(14) {
      animation: ${bounce} 1s forwards 1.3s ease;
    }
    path:nth-child(15) {
      animation: ${bounce} 1s forwards 1.4s ease;
    }
    path:nth-child(16) {
      animation: ${bounce} 1s forwards 1.6s ease;
    }
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

export default BackgroundTextStyle;
