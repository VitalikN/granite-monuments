"use client";

import { useLogoutMutation } from "@/redux/auth/authAPI";
import UpdateForm from "./UpdateForm";
import Modal from "./Modal";
import { MdOutlineCreate } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useToggleMenu } from "../hooks";

import styles from "../../sass/layouts/about.module.scss";

const MonumentsAdmin = () => {
  const [logout] = useLogoutMutation();
  const { menuOpen, setMenuOpen } = useToggleMenu();

  const handleLogout = async () => {
    try {
      await logout({});
    } catch (error) {
      console.error("Помилка під час виходу:", error);
    }
  };

  return (
    <section className={styles.about__section}>
      <div className={`${styles.container} `}>
        MonumentsAdmin
        <MdOutlineCreate onClick={() => setMenuOpen(true)} />
        <FiLogOut onClick={handleLogout} />
        <Modal isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          <UpdateForm onClose={() => setMenuOpen(false)} />
        </Modal>
      </div>
    </section>
  );
};
export default MonumentsAdmin;
