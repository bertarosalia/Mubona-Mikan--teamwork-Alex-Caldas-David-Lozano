import ModalStyled from "./ModalStyled";

export interface ModalProps {
  message: string;
  type: boolean;
}

const Modal = ({ type, message }: ModalProps): JSX.Element => {
  const style = type ? "positive" : "negative";
  return (
    <ModalStyled>
      <span className={style}>{message}</span>
    </ModalStyled>
  );
};

export default Modal;
