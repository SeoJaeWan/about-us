"use client";

import createStyle from "@/style/module/createStyle";
import background from "@/style/module/styles/background";
import styled from "styled-components";
import border from "@/style/module/styles/border";

const { cssStyle, getStyleProps } = createStyle([background, border]);

const BackgroundStyle = styled.div`
  ${cssStyle}
`;

const Child = (props) => {
  const styleProps = getStyleProps(props);

  return <BackgroundStyle {...styleProps}>zzzzz</BackgroundStyle>;
};

const Home = () => {
  return (
    <Child background={"red"} mobileBackground={"blue"}>
      background
    </Child>
  );
};

export default Home;
