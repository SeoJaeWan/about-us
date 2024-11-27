import styled from "styled-components";

interface ContainerProps {
  $isPadding?: boolean;
}

const Container = styled.section<ContainerProps>`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  padding: ${(props) => (props.$isPadding ? "0 6vw" : "0")};
`;

export type SectionStyleProps = ContainerProps;

const SectionStyle = {
  Container,
};

export default SectionStyle;
