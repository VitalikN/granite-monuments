import Image from "next/image";
import { FC } from "react";
import { MonumentsListProps } from "@/types/types";
import styles from "../../sass/layouts/monumentsList.module.scss";

const TechnicalWorks: FC<MonumentsListProps> = ({ title }) => {
  return (
    <div className={styles.technical__section}>
      <h2 className={styles.single__title}>{title}</h2>
      <p className={styles.technical__works}>
        Ведуться технічні роботи. Перепрошуємо за незручності.
      </p>

      <Image
        className={styles.technical__works__img}
        src={"/developer.jpeg"}
        alt="developer"
        width="600"
        height="400"
        priority={true}
      />
    </div>
  );
};

export default TechnicalWorks;
