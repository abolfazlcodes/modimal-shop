/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Context,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import { PiXBold } from "react-icons/pi";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type ModalContextProps = Context<{
  openModalName: string;
  openModalHandler: Dispatch<SetStateAction<string>>;
  closeModalHandler: () => void;
}>;

interface ModalProps {
  children?: ReactNode;
}

// 1. create the context for Modal
const ModalContext: ModalContextProps = createContext({
  openModalName: "",
  closeModalHandler() {},
  openModalHandler(_) {},
});

interface ModalComponent extends React.FC<ModalProps> {
  Header: typeof Header;
  Window: typeof Window;
}

const Modal: ModalComponent = ({ children }: ModalProps) => {
  const [openModalName, setOpenModalName] = useState<string>("");

  const openModalHandler = setOpenModalName;
  const closeModalHandler = () => setOpenModalName("");

  return (
    <ModalContext.Provider
      value={{
        openModalName,
        openModalHandler,
        closeModalHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

interface HeaderProps {
  children: ReactElement;
  modalName: string;
}

function Header({ children, modalName }: HeaderProps) {
  const { openModalHandler } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => openModalHandler(modalName),
  });
}

interface WindowProps {
  modalName: string;
  children: ReactElement;
  className?: string;
  title?: string;
}

function Window({ modalName, children, className, title }: WindowProps) {
  const { openModalName, closeModalHandler } = useContext(ModalContext);
  const { ref } = useOutsideClick(closeModalHandler);

  if (modalName !== openModalName) return null;

  return createPortal(
    <>
      <div ref={ref} className={`absolute bg-white ${className}`}>
        {title && (
          <header className="flex items-center justify-between mb-4">
            <h2 className="text-xl capitalize tracking-wide">{title}</h2>
            <PiXBold className="cursor-pointer" onClick={closeModalHandler} />
          </header>
        )}
        {/* pass the closeModalHandler function as a props to the component that will get rendered here as a child so it can be destructured and used */}
        {cloneElement(children, { onCloseModal: closeModalHandler })}
      </div>
      <Overlay />
    </>,
    document.body,
  );
}

// 3. Connect children to the modal
Modal.Header = Header;
Modal.Window = Window;

export default Modal;
