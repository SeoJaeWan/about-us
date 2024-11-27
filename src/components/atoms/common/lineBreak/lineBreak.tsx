import LineBreakStyle from "./lineBreak.style";

const LineBreak = (props) => {
  const { isShow, isTabletShow, isMobileShow } = props;

  return (
    <LineBreakStyle
      $isShow={isShow}
      $isTabletShow={isTabletShow}
      $isMobileShow={isMobileShow}
    />
  );
};

export default LineBreak;
