"use client";
import { useDynamicHeight } from "./hooks";
import styles from "../sass/layouts/hero.module.scss";

const Hero: React.FC = () => {
  const dynamicHeight = useDynamicHeight();

  return (
    <section
      className={styles.section}
      style={{ height: `${dynamicHeight}px` }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Гранітні пам`ятники</h1>
        <p className={styles.text}>ВИРОБНИЦТВО. ПРОЕКТУВАННЯ. МОНТАЖ</p>
      </div>
    </section>
  );
};
export default Hero;
