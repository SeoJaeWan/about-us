"use client";

import useThemeStore from "@/store/themeStore";
import { color, font, media } from "@/style/theme/theme";
import { ThemeProvider } from "styled-components";

const Theme = (props) => {
  const { children } = props;

  const { getTheme } = useThemeStore();

  const theme = {
    font,
    media,
    color: color[getTheme()],
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
