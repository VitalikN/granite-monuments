"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "../sass/layouts/product.module.scss";

const Product = () => {
  return (
    <section className={styles.product__section}>
      <div className={styles.container}>
        <h2 className={styles.product__title}>Продукція</h2>

        <ul className={styles.product__list}>
          <li className={styles.product__item}>
            <Link
              href="/catalog/single-monuments"
              className={styles.product__link}
            >
              <Image
                className={`${styles.product__img} `}
                src="/granite-1.png"
                alt="catalog/single-monuments"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className={styles.product__text}> Одинарні </h3>
            </Link>
          </li>
          <li className={styles.product__item}>
            <Link
              href="/catalog/double-monuments"
              className={styles.product__link}
            >
              <Image
                className={`${styles.product__img} ${styles.product__double}`}
                src="/granite-2.png"
                alt="catalog/double-monuments"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className={styles.product__text}>Подвійні</h3>
            </Link>
          </li>
          <li className={styles.product__item}>
            <Link
              href="/catalog/monument-accessories"
              className={styles.product__link}
            >
              <Image
                className={`${styles.product__img} ${styles.product__vases}`}
                src="/granite-vases.png"
                alt="catalog/monument-accessories"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className={styles.product__text}>Аксесуари</h3>
            </Link>
          </li>
          <li className={styles.product__item}>
            <Link href="/catalog/icons" className={styles.product__link}>
              <Image
                className={`${styles.product__img} ${styles.product__icon}`}
                src="/icon.jpeg"
                alt="catalog/icons"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className={styles.product__text}>Ікони</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
