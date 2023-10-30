import { useState } from "react";

import styles from "../sass/layouts/pagination.module.scss";

export const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={` ${styles.pagination__btn}  ${
            currentPage === index + 1 ? styles.active : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
