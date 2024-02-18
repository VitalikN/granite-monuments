import Image from "next/image";

import { ImageListProps, ImageProps } from "@/types/types";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { MdOutlineDeleteForever, MdOutlineCreate } from "react-icons/md";
import { useEffect, useState } from "react";
import AdminProductForm from "./admin/AdminProductForm";
import { useUpdateMonumentFavoriteMutation } from "@/redux/adminMonumentsApi/adminMonumentsApi";
import Modal from "./admin/Modal";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Link from "next/link";
import { toast } from "react-toastify";
import styles from "../sass/layouts/imageList.module.scss";

export const ImageList: React.FC<ImageListProps> = ({
  data,
  deleteProduct,
}) => {
  const isAdmin = useSelector(authSelector.getAdminEmail);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [mutateAsync] = useUpdateMonumentFavoriteMutation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lightbox = new SimpleLightbox(`.${styles.single__img}  `, {
        captionDelay: 250,
        disableRightClick: true,
        showCounter: false,
        scrollZoom: false,
        alertError: false,
      });

      lightbox.on("shown.simplelightbox", () => {
        document.body.classList.add("body-lock");
      });

      lightbox.on("close.simplelightbox", () => {
        document.body.classList.remove("body-lock");
      });

      return () => {
        lightbox.destroy();
      };
    }
  }, [data]);

  const handleOpenUpdateForm = (product: any) => {
    setSelectedProduct(product);
  };

  const handleUpdateFavorite = async (id: string, currentFavorite: boolean) => {
    try {
      const newFavorite = { favorite: !currentFavorite };
      await mutateAsync({ id, newFavorite });
      toast.success(`Успішно оновлено об'єкт `);
    } catch (error) {
      console.error("Помилка при оновленні об'єкта", error);
    }
  };

  return (
    <>
      {data && (
        <ul className={styles.single__list}>
          {data.map(
            ({
              _id,
              url,
              title,
              price,
              category,
              favorite,
              subtitle,
            }: ImageProps) => (
              <li className={styles.single__item} key={_id}>
                <Link
                  href={url}
                  className={` ${styles.single__img}`}
                  // key={_id}
                  title={title}
                >
                  <Image
                    className={styles.single__img}
                    src={url}
                    alt="catalog/monument-accessories"
                    width="200"
                    height="300"
                    priority={true}
                  />
                </Link>
                <div
                  className={styles.single__list__box}
                  style={{
                    display: category === "icons" ? "none" : "block",
                  }}
                >
                  <p>{title}</p>
                  <div className={styles.single__list__box__icon}>
                    {favorite ? (
                      <p className={styles.single__list__box__price}>
                        ціна: {price}
                      </p>
                    ) : (
                      <p>Кінцева вартість при замовлені</p>
                    )}
                    {isAdmin && deleteProduct && (
                      <div className={styles.single__box__icon}>
                        <label className={styles.checkbox}>
                          <input
                            onChange={() => handleUpdateFavorite(_id, favorite)}
                            type="checkbox"
                          />
                          <span className={styles.chip}></span>
                        </label>
                        <MdOutlineCreate
                          onClick={() =>
                            handleOpenUpdateForm({
                              _id,
                              url,
                              title,
                              price,
                              category,
                              favorite,
                              subtitle,
                            })
                          }
                          className={`${styles.single__icon} ${styles.single__icon__create}`}
                        />
                        <MdOutlineDeleteForever
                          className={styles.single__icon}
                          onClick={() => deleteProduct(_id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}
      {selectedProduct && (
        <Modal isOpen={true} onClose={() => setSelectedProduct(null)}>
          <AdminProductForm
            action={"update"}
            data={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        </Modal>
      )}
    </>
  );
};
