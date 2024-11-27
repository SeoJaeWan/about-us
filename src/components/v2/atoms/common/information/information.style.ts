import styled from "styled-components";
import brackets from "@/assets/v2/images/common/brackets.svg";

const Container = styled.div`
  position: relative;

  padding: 14px 24px;

  &::before,
  &::after {
    content: "";

    position: absolute;
    top: 0;

    display: block;

    width: 24px;
    height: 100%;

    background-image: ${`url(${brackets.src})`};
    background-repeat: no-repeat;
    background-position: center;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;

    transform: rotate(180deg);
  }
`;

const InformationStyle = {
  Container,
};

export default InformationStyle;
