import TextStyle from "./text.style";

const Text = (props) => {
  const { as, className, chiildren } = props;

  return (
    <TextStyle as={as} className={className}>
      {chiildren}
    </TextStyle>
  );
};

export default Text;
