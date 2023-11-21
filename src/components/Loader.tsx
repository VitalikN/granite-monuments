import styles from "../sass/layouts/loader.module.scss";

const Loader = () => {

  return (
    <section className={styles.section}>
      <span className={styles.loader}></span>
    </section>
  );
};

export default Loader;
