"use client";

import background from "@/style/module/background";
import styled from "styled-components";

const BackgroundStyle = styled.div`
  ${background}
`;

const Home = () => {
  return (
    <BackgroundStyle $background={"red"} $mobileBackground={"yellow"}>
      background
    </BackgroundStyle>
  );
};

export default Home;
