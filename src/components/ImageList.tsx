import Image from "next/image";

import styles from "../sass/layouts/imageList.module.scss";
import { ImageListProps, ImageProps } from "@/types/types";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { MdOutlineDeleteForever, MdOutlineCreate } from "react-icons/md";
import { useState } from "react";
import AdminProductForm from "./admin/AdminProductForm";
import { useUpdateMonumentFavoriteMutation } from "@/redux/adminMonumentsApi/adminMonumentsApi";
import Modal from "./admin/Modal";

export const ImageList: React.FC<ImageListProps> = ({
  data,
  deleteProduct,
  category,
}) => {
  const isAdmin = useSelector(authSelector.getAdminEmail);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [mutateAsync] = useUpdateMonumentFavoriteMutation();

  const handleOpenUpdateForm = (product: any) => {
    setSelectedProduct(product);
  };

  const handleUpdateFavorite = async (id: string, currentFavorite: boolean) => {
    try {
      const newFavorite = { favorite: !currentFavorite };
      await mutateAsync({ id, newFavorite });
      console.log("Успішно оновлено об'єкт", newFavorite);
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
                <Image
                  className={styles.single__img}
                  src={url}
                  alt="catalog/monument-accessories"
                  width="200"
                  height="300"
                  priority={true}
                />
                <div
                  className={styles.single__list__box}
                  style={{
                    display: category === "icons" ? "none" : "flex",
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
