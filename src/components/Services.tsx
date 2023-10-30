"use client";
import { IoMdCheckboxOutline } from "react-icons/io";

import styles from "../sass/layouts/services.module.scss";

const Services: React.FC = () => {
  return (
    <section className={styles.services__section}>
      <div className={styles.container}>
        <h2 className={styles.services__title}>Послуги</h2>
        <ul className={styles.services__list}>
          <li className={styles.services__item}>
            <IoMdCheckboxOutline className={styles.services__icon} />
            <p className={styles.services__text}>
              Художнє оформлення пам`ятника
            </p>
          </li>
          <li className={styles.services__item}>
            <IoMdCheckboxOutline className={styles.services__icon} />
            <p className={styles.services__text}>
              Заливка армованого фундаменту
            </p>
          </li>
          <li className={styles.services__item}>
            <IoMdCheckboxOutline className={styles.services__icon} />
            <p className={styles.services__text}>
              Доставка і монтаж пам`ятників по м. Мукачево та Закарпатській обл.
            </p>
          </li>
          <li className={styles.services__item}>
            <IoMdCheckboxOutline className={styles.services__icon} />
            <p className={styles.services__text}>
              Укладання плитки навколо памятника за бажанням замовника.
            </p>
          </li>

          <li className={styles.services__item}>
            <IoMdCheckboxOutline className={styles.services__icon} />
            <p className={styles.services__text}>
              Виготовлення та встановлення аксесуарів, таких як: вази, книжки,
              гранітні лавки, підсвічники (лампадки), хрести гранітні та латунні
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
