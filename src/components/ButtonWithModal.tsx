"use client";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
// import { useScroll } from "./hooks";
import Modal from "./admin/Modal";
import SendMessageForm from "./SendMessage";

import styles from "@/sass/layouts/sendMessage.module.scss";
const ButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const isScrolled = useScroll();

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* {isScrolled && ( */}
      <AiOutlineMessage
        className={styles.floating__button}
        size={40}
        onClick={handleButtonClick}
      />
      {/* )} */}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SendMessageForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default ButtonWithModal;
