import { ChangeEvent, FC, useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { ImageList } from "../ImageList";
import Image from "next/image";

import styles from "../../sass/layouts/monumentsList.module.scss";
import { MonumentsListProps } from "@/types/types";
import { useGetAllMonumentsQuery } from "@/redux/monuments/monumentsApi";

const MonumentsList: FC<MonumentsListProps> = ({ title, category }) => {
  const [selectedSubtitle, setSelectedSubtitle] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  const { data, error, isLoading } = useGetAllMonumentsQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: category,
    subtitle: selectedSubtitle,
  });

  const handleSubtitleChange = (e: any) => {
    const newSubtitle = e.target.value;
    setSelectedSubtitle(newSubtitle);
    setCurrentPage(1);
  };

  if (isLoading) {
    // Якщо дані ще завантажуються, відображаємо індікатор завантаження або інший візуальний ефект.
    return <div>Loading...</div>;
  }

  if (error) {
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

        <select
          className={styles.selected__saubtitle}
          onChange={handleSubtitleChange}
          style={{
            display:
              category === "single" || category === "double" ? "block" : "none",
          }}
        >
          <option value="">Всі</option>
          <option value="open">Відкриті</option>
          <option value="closed">Закриті</option>
        </select>

        <ImageList
          data={data.data}
          handleImagesPerPageChange={handleItemsPerPageChange}
          imagesPerPage={itemsPerPage}
        />

        <Pagination
          totalItems={data.total}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default MonumentsList;
