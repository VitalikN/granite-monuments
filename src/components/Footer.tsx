"use client";

import Link from "next/link";
import MenuItems from "./MenuItems";

import { usePathname } from "next/navigation";
import styles from "../sass/layouts/footer.module.scss";

const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`${styles.footer__section}  ${
        pathname === "/" ? styles.home : styles.other
      }`}
    >
      <div className={styles.container}>
        <div className={styles.footer__container}>
          <address className={styles.footer__address}>
            <h2 className={styles.footer__title}>Контакти</h2>
            <Link
              className={`${styles.footer__link} ${styles.footer__tel}`}
              href="tel:+380502636243"
            >
              +380502636243
            </Link>

            <Link
              className={styles.footer__link}
              href="https://www.google.com/maps/place/%D0%BF%D0%BB%D0%BE%D1%89%D0%B0+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%B0+%D1%96+%D0%9C%D0%B5%D1%84%D0%BE%D0%B4%D1%96%D1%8F,+10,+%D0%9C%D1%83%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D0%BE,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+89600"
              target="_blank"
            >
              Адреса: м. Мукачево, пл. Кирила і Мефодія, 10-12
            </Link>
          </address>
          <div className={styles.footer__nav}>
            <MenuItems />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
