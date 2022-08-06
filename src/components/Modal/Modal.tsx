import { useContext } from "react";
import { closeModalActionCreator } from "../../store/actions/actionUI/UIActionsCreator";
import { UIContext } from "../../store/contexts/UIContext/UIContext";
import ModalStyled from "./ModalStyled";
export interface ModalProps {
  message: string;
  type: boolean;
}

const Modal = ({ type, message }: ModalProps): JSX.Element => {
  const { UIdispatch } = useContext(UIContext);

  return (
    <ModalStyled>
      <span className={type ? "positive" : "negative"}>
        {message}
        <button onClick={() => UIdispatch(closeModalActionCreator())}>
          &nbsp;&nbsp;&nbsp;X
        </button>
      </span>
    </ModalStyled>
  );
};

export default Modal;
