"use client";

import { useGetAllEpitaphsQuery } from "@/redux/epitaphs/epitaphsApi";
import styles from "../../sass/layouts/epitaphsList.module.scss";
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import TechnicalWorks from "./TechnicalWorks";
import Loader from "../Loader";
import { EpitaphProps } from "@/types/types";
import { useDeleteEpitaphMutation } from "@/redux/epitaphs/adminEpitaphsApi";
import { toast } from "react-toastify";

import { MdOutlineDeleteForever } from "react-icons/md";
import authSelector from "@/redux/auth/authSelector";
import { useSelector } from "react-redux";
import AddEpitaph from "../admin/AddEpitaph";
import { useToggleMenu } from "../hooks";
import Modal from "../admin/Modal";

const EpitaphsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { menuOpen, setMenuOpen, openForm } = useToggleMenu();

  const [deleteEpitaph] = useDeleteEpitaphMutation();
  const isAdmin = useSelector(authSelector.getAdminEmail);

  const { data, error, isLoading, refetch } = useGetAllEpitaphsQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  const handleDelete = async (_id: string) => {
    await deleteEpitaph(_id).unwrap();
    toast.success(`Епітафій видалино`);
    refetch();
  };
  useEffect(() => {
    refetch();
  }, [currentPage, itemsPerPage, refetch]);

  if (error || !data || data.total === 0 || !data.data) {
    return <TechnicalWorks title="Епітафії" />;
  }
  return (
    <section className={styles.single__section}>
      <div className={styles.single__container}>
        <h2 className={styles.single__title}> Поминальні вірші </h2>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {isAdmin && (
              <>
                <h3
                  className={styles.admin__text}
                  onClick={() => openForm("addEpitaph")}
                >
                  Додати Епітафій
                </h3>
              </>
            )}
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
                    {isAdmin && (
                      <MdOutlineDeleteForever
                        className={styles.single__icon}
                        onClick={() => handleDelete(_id)}
                      />
                    )}
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

        <Modal isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          <AddEpitaph refetch={refetch} onClose={() => setMenuOpen(false)} />
        </Modal>
      </div>
    </section>
  );
};
export default EpitaphsList;
