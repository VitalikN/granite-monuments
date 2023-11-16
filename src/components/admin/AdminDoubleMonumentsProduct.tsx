"use client";

import AdminMonumentsProduct from "./AdminMonumentsProduct";
import AdminSidebar from "./AdminSidebar";
import styles from "../../sass/layouts/adminAccessoriesProduct.module.scss";

const AdminDoubleMonumentsProduct: React.FC = () => {
  return (
    <section className={styles.section__container}>
      <div className={`${styles.container} ${styles.section__box}`}>
        <AdminSidebar />
        <AdminMonumentsProduct category="double" title="Подвійні пам`ятники" />
      </div>
    </section>
  );
};
export default AdminDoubleMonumentsProduct;
