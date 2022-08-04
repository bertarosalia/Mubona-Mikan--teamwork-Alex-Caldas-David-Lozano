import ButtonStyled from "./ButtonStyled";

export interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  const scrollup = () => {
    actionOnClick();
  };
  return (
    <ButtonStyled className="" onClick={scrollup}>
      {text}
    </ButtonStyled>
  );
};
export default Button;
