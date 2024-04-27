import BoxStyle from "./box.style";

const Box = (props) => {
  const { as, className, children, onSubmit } = props;

  return (
    <BoxStyle as={as} className={className} onSubmit={onSubmit}>
      {children}
    </BoxStyle>
  );
};

export default Box;
