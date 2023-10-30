import { useState, FC } from "react";

import styles from "../sass/layouts/pagination.module.scss";
import { PaginationProps } from "@/types/types";
import { usePaginationLogic } from "./hooks";

export const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  initialPage = 1,
}) => {
  const { currentPage, totalPages, handlePageChange } = usePaginationLogic({
    totalItems,
    itemsPerPage,
    initialPage,
  });
  if (totalPages <= 1) {
    return null;
  }

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
