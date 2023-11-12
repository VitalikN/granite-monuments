import { FC, useState } from "react";
import { Pagination } from "../Pagination";
import { ImageList } from "../ImageList";

import styles from "../../sass/layouts/monumentsList.module.scss";
import { MonumentsListProps } from "@/types/types";
import { useGetAllMonumentsQuery } from "@/redux/monuments/monumentsApi";
import TechnicalWorks from "./TechnicalWorks";

const MonumentsList: FC<MonumentsListProps> = ({ title, category }) => {
  const [selectedSubtitle, setSelectedSubtitle] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    return <div>Loading...</div>;
  }

  if (error || data.total === 0) return <TechnicalWorks title={title} />;

  return (
    <section className={styles.single__section}>
      <div className={styles.container}>
        <h2 className={styles.single__title}>{title}</h2>

        <div
          className={styles.radio__group__box}
          style={{
            display:
              category === "single" || category === "double" ? "flex" : "none",
          }}
        >
          <p className={styles.radio__text}>Оберіть тип:</p>
          <div className={styles.radio__group}>
            <label
              className={`${styles.radio__label} ${
                selectedSubtitle === "" ? styles.active : ""
              }`}
            >
              <input
                className={styles.radio__input}
                type="radio"
                value=""
                checked={selectedSubtitle === ""}
                onChange={handleSubtitleChange}
              />
              Всі
            </label>
            <label
              className={`${styles.radio__label} ${
                selectedSubtitle === "open" ? styles.active : ""
              }`}
            >
              <input
                className={styles.radio__input}
                type="radio"
                value="open"
                checked={selectedSubtitle === "open"}
                onChange={handleSubtitleChange}
              />
              Відкриті
            </label>
            <label
              className={`${styles.radio__label} ${
                selectedSubtitle === "closed" ? styles.active : ""
              }`}
            >
              <input
                className={styles.radio__input}
                type="radio"
                value="closed"
                checked={selectedSubtitle === "closed"}
                onChange={handleSubtitleChange}
              />
              Закриті
            </label>
          </div>
        </div>
        <ImageList data={data.data} />

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
