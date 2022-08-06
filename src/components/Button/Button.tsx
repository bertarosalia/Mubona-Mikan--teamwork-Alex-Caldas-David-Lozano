import ButtonStyled from "./ButtonStyled";

export interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="" onClick={() => actionOnClick()}>
      {text}
    </ButtonStyled>
  );
};
export default Button;
