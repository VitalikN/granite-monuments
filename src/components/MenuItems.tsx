import Link from "next/link";

import { usePathname } from "next/navigation";

import { MenuItemsProps } from "@/types/types";
import styles from "../sass/layouts/header.module.scss";

const MenuItems: React.FC<MenuItemsProps> = ({ closeMenu }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        onClick={closeMenu}
        href="/"
        className={`${styles.navigation__link} ${
          pathname === "/" ? styles.active : ""
        }`}
      >
        Головна
      </Link>
      <Link
        onClick={closeMenu}
        href="/about"
        className={`${styles.navigation__link} ${
          pathname === "/about" ? styles.active : ""
        }`}
      >
        Про нас
      </Link>
      <Link
        onClick={closeMenu}
        href="/catalog"
        className={`${styles.navigation__link} ${
          pathname === "/catalog" ? styles.active : ""
        }`}
      >
        Каталог продукції
      </Link>
    </>
  );
};
export default MenuItems;
