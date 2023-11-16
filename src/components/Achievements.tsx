import { FaHandshake, FaCheckDouble, FaUser } from "react-icons/fa";
import { MdWorkHistory, MdFactCheck } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

import styles from "../sass/layouts/achievements.module.scss";

const Achievements: React.FC = () => {
  return (
    <section className={styles.achievements__section}>
      <div className={styles.container}>
        <h2 className={styles.achievements__title}>Наші переваги</h2>
        <ul className={styles.achievements__list}>
          <li className={styles.achievements__item}>
            <MdWorkHistory className={styles.list__icon} />
            <h3 className={styles.list__title}>Працюємо з 2006 року</h3>
          </li>

          <li className={styles.achievements__item}>
            <FaUser className={styles.list__icon} />
            <h3 className={styles.list__title}>Професійна художня робота</h3>
          </li>
          <li className={styles.achievements__item}>
            <FaHandshake className={styles.list__icon} />
            <h3 className={styles.list__title}>Надаємо гарантію</h3>
          </li>
          <li className={styles.achievements__item}>
            <FaCheckDouble className={styles.list__icon} />
            <h3 className={styles.list__title}>Широкий спектр послуг</h3>
          </li>
          <li className={styles.achievements__item}>
            <BiSolidLike className={styles.list__icon} />
            <h3 className={styles.list__title}>Висока якість продукції</h3>
          </li>
          <li className={styles.achievements__item}>
            <MdFactCheck className={styles.list__icon} />
            <h3 className={styles.list__title}> Індивідуальний підхід</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
