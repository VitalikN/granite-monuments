"use client";

import AdminMonumentsProduct from "./AdminMonumentsProduct";
import AdminSidebar from "./AdminSidebar";
import styles from "../../sass/layouts/adminAccessoriesProduct.module.scss";

const AdminIconsProduct: React.FC = () => {
  return (
    <section className={styles.section__container}>
      <div className={`${styles.container} ${styles.section__box}`}>
        <AdminSidebar />
        <AdminMonumentsProduct category="icons" title="Ікони до пам`ятників" />
      </div>
    </section>
  );
};
export default AdminIconsProduct;
