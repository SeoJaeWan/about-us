import { Black, White } from "@/store/themeStore";

export const font = {
  mainTitle: "5rem",
  subTitle: "3rem",

  sectionTitle: "4rem",
  sectionCategory: "1.5rem",
  sectionText: "1.125rem",

  menuTitle: "1rem",
  menuText: "0.875rem",
};

export const color = {
  [Black]: {
    background: "#2f3640",
  },
  [White]: {
    background: "#f5f6fa",
  },
};

export const realColor = {
  black: "#000",
  white: "#fff",
  gray1: "#dfe4ea",
  gray2: "#576574",
  gray3: "#dfdfdf",
  shadow: "#f1f2f6",
  background: "rgba(223, 249, 251, 0.5)",
};

export const media = {
  mobile: 767,
  tablet: 1024,
  notebook: 1680,
};
