import ModalStyled from "./ModalStyled";
export interface ModalProps {
  message: string;
  type: boolean;
}

const Modal = ({ type, message }: ModalProps): JSX.Element => {
  return (
    <ModalStyled>
      <span className={type ? "positive" : "negative"}>{message}</span>
    </ModalStyled>
  );
};

export default Modal;
