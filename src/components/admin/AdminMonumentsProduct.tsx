import { FC, useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { ImageList } from "../ImageList";

import styles from "../../sass/layouts/monumentsList.module.scss";
import { MonumentsListProps } from "@/types/types";
import {
  useDeleteMonumentMutation,
  useGetAllMonumentsProductQuery,
} from "@/redux/adminMonumentsApi/adminMonumentsApi";
import TechnicalWorks from "../product/TechnicalWorks";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader";

const AdminMonumentsProduct: FC<MonumentsListProps> = ({ title, category }) => {
  const [selectedSubtitle, setSelectedSubtitle] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, error, isLoading, refetch } = useGetAllMonumentsProductQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: category,
    subtitle: selectedSubtitle,
  });
  const [deleteMonument] = useDeleteMonumentMutation();

  const handleDelete = async (_id: string) => {
    await deleteMonument(_id).unwrap();
    toast.success(`Товар видалино`);
    refetch();
  };
  const handleSubtitleChange = (e: any) => {
    const newSubtitle = e.target.value;
    setSelectedSubtitle(newSubtitle);
    setCurrentPage(1);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, itemsPerPage, category, selectedSubtitle, refetch]);

  return (
    <div className={styles.single__container}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="light"
      />

      {isLoading ? (
        <Loader />
      ) : error || !data || data.total === 0 || !data.data ? (
        <TechnicalWorks title={title} />
      ) : (
        <>
          <h2 className={styles.single__title}>{title}</h2>

          <div
            className={styles.radio__group__box}
            style={{
              display:
                category === "single" || category === "double"
                  ? "flex"
                  : "none",
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

          <ImageList data={data.data} deleteProduct={handleDelete} />

          <Pagination
            totalItems={data.total}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default AdminMonumentsProduct;
