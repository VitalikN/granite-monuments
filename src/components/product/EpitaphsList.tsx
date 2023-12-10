"use client";

import { useGetAllEpitaphsQuery } from "@/redux/epitaphs/epitaphsApi";
import styles from "../../sass/layouts/epitaphsList.module.scss";
import { useState } from "react";
import { Pagination } from "../Pagination";
import TechnicalWorks from "./TechnicalWorks";
import Loader from "../Loader";
import { EpitaphProps } from "@/types/types";

const EpitaphsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, error, isLoading } = useGetAllEpitaphsQuery({
    page: currentPage,
    limit: itemsPerPage,
  });
  console.log({ data });
  if (error || !data || data.total === 0 || !data.data) {
    return <TechnicalWorks title="Епітафії" />;
  }
  return (
    <section className={styles.single__section}>
      <div className={styles.container}>
        <h2 className={styles.single__title}> Поминальні вірші </h2>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className={styles.epitaph__list}>
              {data.data.map(
                ({ _id, epitaph, epitaphNumber }: EpitaphProps) => (
                  <li className={styles.epitaph__item} key={_id}>
                    <p className={styles.epitaph__text}>
                      <span className={styles.epitaph__chip}>
                        {epitaphNumber}.{" "}
                      </span>
                      {epitaph}
                    </p>
                  </li>
                )
              )}
            </ul>

            <Pagination
              totalItems={data.total}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </section>
  );
};
export default EpitaphsList;
