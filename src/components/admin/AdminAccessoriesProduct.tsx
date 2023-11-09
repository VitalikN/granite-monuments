"use client";

import AdminMonumentsProduct from "./AdminMonumentsProduct";
import AdminSidebar from "./AdminSidebar";
import styles from "../../sass/layouts/adminAccessoriesProduct.module.scss";

const AdminAccessoriesProduct: React.FC = () => {
  return (
    <section className={styles.section__container}>
      <div className={`${styles.container} ${styles.section__box}`}>
        <AdminSidebar />
        <AdminMonumentsProduct
          category="accessories"
          title="Аксесуари до пам`ятників"
        />
      </div>
    </section>
  );
};
export default AdminAccessoriesProduct;
