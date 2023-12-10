import styles from "../../sass/layouts/adminAccessoriesProduct.module.scss";
import EpitaphsList from "../product/EpitaphsList";
import AdminSidebar from "./AdminSidebar";

const AdminEpitaphsProduct = () => {
  return (
    <section className={styles.section__container}>
      <div className={`${styles.container} ${styles.section__box}`}>
        <AdminSidebar />
        <EpitaphsList />
      </div>
    </section>
  );
};
export default AdminEpitaphsProduct;
