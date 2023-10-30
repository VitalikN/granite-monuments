import { FC } from "react";
import { Pagination } from "./Pagination";
import { ImageList } from "./ImageList";
import Image from "next/image";

import styles from "../sass/layouts/imageList.module.scss";
import { MonumentsListProps } from "@/types/types";
import { usePagination } from "./hooks";

const MonumentsList: FC<MonumentsListProps> = ({ monumentsData, title }) => {
  const {
    itemsPerPage,
    currentPage,
    handleItemsPerPageChange,
    setCurrentPage,
  } = usePagination(10);

  const displayedImages = monumentsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!monumentsData || monumentsData.length === 0) {
    return (
      <section className={styles.technical__section}>
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
      </section>
    );
  }

  return (
    <section className={styles.single__section}>
      <div className={styles.container}>
        <h2 className={styles.single__title}>{title}</h2>

        <ImageList
          images={displayedImages}
          handleImagesPerPageChange={handleItemsPerPageChange}
          imagesPerPage={itemsPerPage}
        />

        <Pagination
          totalItems={monumentsData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default MonumentsList;
