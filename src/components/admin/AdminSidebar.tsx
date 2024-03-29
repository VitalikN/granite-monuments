"use client";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { useToggleMenu } from "../hooks";
import { useLogoutMutation } from "@/redux/auth/authAPI";
import Modal from "./Modal";
import { MdOutlineCreate } from "react-icons/md";
import AdminProductForm from "./AdminProductForm";
import UpdateForm from "./UpdateForm";
import styles from "../../sass/layouts/adminSidebar.module.scss";

const AdminSidebar = () => {
  const [logout] = useLogoutMutation();
  const { menuOpen, setMenuOpen, selectedForm, openForm } = useToggleMenu();

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
          <h3
            className={styles.admin__text}
            onClick={() => openForm("addProduct")}
          >
            Додати пам`ятник
          </h3>
        </li>
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
        <li className={styles.admin__item}>
          <Link href="/admin/admin-epitaphs" className={styles.admin__link}>
            <h3 className={styles.admin__text}>Епітафії</h3>
          </Link>
        </li>
      </ul>
      <div className={styles.admin__box__icon}>
        <h3 className={styles.admin__box__text}>
          Профіль
          <MdOutlineCreate
            className={styles.admin__icon}
            onClick={() => openForm("updateEmail")}
          />
        </h3>
        <h3 className={styles.admin__box__text}>
          Вихід
          <FiLogOut className={styles.admin__icon} onClick={handleLogout} />
        </h3>
      </div>
      <Modal isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        {selectedForm === "addProduct" && (
          <AdminProductForm action={"add"} onClose={() => setMenuOpen(false)} />
        )}
        {selectedForm === "updateEmail" && (
          <UpdateForm onClose={() => setMenuOpen(false)} />
        )}
      </Modal>
    </div>
  );
};
export default AdminSidebar;
