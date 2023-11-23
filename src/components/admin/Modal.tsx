import { AiOutlineClose } from "react-icons/ai";
import { useClickOutside } from "../hooks";
import React, { RefObject, useState } from "react";
import { ModalProps } from "@/types/types";
import styles from "../../sass/layouts/modal.module.scss";
import UpdateForm from "./UpdateForm";
import AdminProductForm from "./AdminProductForm";

const Modal = ({ isOpen, onClose, formType }: ModalProps) => {
  const modalRef: RefObject<HTMLDivElement> = React.createRef();

  useClickOutside(modalRef, isOpen, () => {
    onClose();
  });
  if (!isOpen) return null;

  const renderForm = () => {
    switch (formType) {
      case "updateEmail":
        return <UpdateForm onClose={onClose} />;
      case "addProduct":
        return <AdminProductForm action={"add"} onClose={onClose} />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content} ref={modalRef}>
        <AiOutlineClose
          className={styles.modal__close}
          onClick={() => {
            onClose();
          }}
        />
        {renderForm()}
      </div>
    </div>
  );
};

export default Modal;
