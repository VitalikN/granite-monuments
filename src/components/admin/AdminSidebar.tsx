"use client";
import Link from "next/link";
import styles from "../../sass/layouts/adminSidebar.module.scss";
import { FiLogOut } from "react-icons/fi";
import { useToggleMenu } from "../hooks";
import { useLogoutMutation } from "@/redux/auth/authAPI";

import UpdateForm from "./UpdateForm";
import Modal from "./Modal";
import { MdOutlineCreate } from "react-icons/md";

const AdminSidebar = () => {
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
    <div>
      <ul className={styles.admin__list}>
        <li className={styles.admin__item}>
          <Link href="/admin/admin-single" className={styles.admin__link}>
            <h3 className={styles.admin__text}> Одинарні </h3>
          </Link>
        </li>
        <li className={styles.admin__item}>
          <Link href="/admin/admin-double" className={styles.admin__link}>
            <h3 className={styles.admin__text}>Подвійні</h3>
          </Link>
        </li>
        <li className={styles.admin__item}>
          <Link href="/admin/admin-accessories" className={styles.admin__link}>
            <h3 className={styles.admin__text}>Аксесуари</h3>
          </Link>
        </li>
        <li className={styles.admin__item}>
          <Link href="/admin/admin-icons" className={styles.admin__link}>
            <h3 className={styles.admin__text}>Ікони</h3>
          </Link>
        </li>
      </ul>
      <div className={styles.admin__box__icon}>
        <h3 className={styles.admin__box__text}>
          Профіль
          <MdOutlineCreate
            className={styles.admin__icon}
            onClick={() => setMenuOpen(true)}
          />
        </h3>

        <FiLogOut className={styles.admin__icon} onClick={handleLogout} />
      </div>
      <Modal isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        <UpdateForm onClose={() => setMenuOpen(false)} />
      </Modal>
    </div>
  );
};
export default AdminSidebar;
