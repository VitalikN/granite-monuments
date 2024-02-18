import { AiOutlineClose } from "react-icons/ai";
import { useClickOutside } from "../hooks";
import React, { RefObject } from "react";
import { ModalProps } from "@/types/types";
import styles from "../../sass/layouts/modal.module.scss";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef: RefObject<HTMLDivElement> = React.createRef();

  useClickOutside(modalRef, isOpen, () => {
    onClose();
  });
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content} ref={modalRef}>
        <AiOutlineClose
          className={styles.modal__close}
          onClick={() => {
            onClose();
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
