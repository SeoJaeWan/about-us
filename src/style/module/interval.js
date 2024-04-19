import { css } from "styled-components";

const interval = css`
  margin: ${(props) => props.$margin};
  margin-top: ${(props) => props.$marginTop};
  margin-left: ${(props) => props.$marginLeft};
  margin-bottom: ${(props) => props.$marginBottom};
  margin-right: ${(props) => props.$marginRight};

  padding: ${(props) => props.$padding};
  padding-top: ${(props) => props.$paddingTop};
  padding-left: ${(props) => props.$paddingLeft};
  padding-bottom: ${(props) => props.$paddingBottom};
  padding-right: ${(props) => props.$paddingRight};
`;

export default interval;
