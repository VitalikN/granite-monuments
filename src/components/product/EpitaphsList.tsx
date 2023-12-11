"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineDeleteForever, MdOutlineCreate } from "react-icons/md";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { useDeleteEpitaphMutation } from "@/redux/epitaphs/adminEpitaphsApi";
import { useGetAllEpitaphsQuery } from "@/redux/epitaphs/epitaphsApi";
import { EpitaphProps } from "@/types/types";

import TechnicalWorks from "./TechnicalWorks";
import Loader from "../Loader";
import { Pagination } from "../Pagination";
import { useToggleMenu } from "../hooks";
import AddEpitaph from "../admin/AddEpitaph";
import Modal from "../admin/Modal";
import styles from "../../sass/layouts/epitaphsList.module.scss";
// import UpdateEpitaph from "../admin/UpdateEpitaph";

const EpitaphsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [epitaphProduct, setEpitaphProduct] = useState(null);

  const { menuOpen, setMenuOpen, openForm } = useToggleMenu();

  const [deleteEpitaph] = useDeleteEpitaphMutation();
  const isAdmin = useSelector(authSelector.getAdminEmail);

  const { data, error, isLoading, refetch } = useGetAllEpitaphsQuery({
    page: currentPage,
    limit: itemsPerPage,
  });
  // const handleOpenUpdateEpitaphForm = (product: any) => {
  //   setEpitaphProduct(product);
  //   openForm("UpdateEpitaph");
  // };

  const handleDelete = async (_id: string) => {
    await deleteEpitaph(_id).unwrap();
    toast.success(`Епітафій видалино`);
    refetch();
  };
  useEffect(() => {
    refetch();
  }, [currentPage, itemsPerPage, refetch, data]);

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
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  closeOnClick
                  theme="light"
                />
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
                      <>
                        {/* <MdOutlineCreate
                          className={styles.admin__icon}
                          onClick={() =>
                            handleOpenUpdateEpitaphForm({
                              _id,
                              epitaph,
                              epitaphNumber,
                            })
                          } 
                        />
                          */}
                        <MdOutlineDeleteForever
                          className={styles.single__icon}
                          onClick={() => handleDelete(_id)}
                        />
                      </>
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
          {/* <UpdateEpitaph
            refetch={refetch}
            onClose={() => setMenuOpen(false)}
            data={epitaphProduct}
          /> */}
        </Modal>
      </div>
    </section>
  );
};
export default EpitaphsList;
