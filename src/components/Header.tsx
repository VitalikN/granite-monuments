"use client";

import MenuItems from "./MenuItems";
import Link from "next/link";

import { useToggleMenu } from "./hooks";
import styles from "../sass/layouts/header.module.scss";

const Header: React.FC = () => {
  const { menuOpen, setMenuOpen } = useToggleMenu();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__box}>
          <nav
            className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}
          >
            <MenuItems closeMenu={() => setMenuOpen(false)} />
          </nav>
          <button
            className={styles.burger__menu}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
            ></span>
          </button>
          <Link
            className={`${styles.navigation__link}
            ${styles.navigation__tel}`}
            href="tel:+380502636243"
          >
            +380502636243
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
