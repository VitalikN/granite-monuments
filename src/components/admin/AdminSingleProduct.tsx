"use client";

import AdminMonumentsProduct from "./AdminMonumentsProduct";
import AdminSidebar from "./AdminSidebar";
import styles from "../../sass/layouts/adminAccessoriesProduct.module.scss";
import Loader from "../Loader";

const AdminSingleProduct: React.FC = () => {
  return (
    <section className={styles.section__container}>
      <div className={`${styles.container} ${styles.section__box}`}>
        <AdminSidebar />
        <AdminMonumentsProduct category="single" title="Одинарні пам`ятники" />
      </div>
    </section>
  );
};
export default AdminSingleProduct;
