import ButtonStyle from "./button.style";

const Button = (props) => {
  const { className, children, onClick } = props;

  return (
    <ButtonStyle className={className} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
