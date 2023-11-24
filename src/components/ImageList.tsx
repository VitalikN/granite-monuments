import Image from "next/image";

import styles from "../sass/layouts/imageList.module.scss";
import { ImageListProps, ImageProps } from "@/types/types";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { MdOutlineDeleteForever, MdOutlineCreate } from "react-icons/md";
import { useState } from "react";
import AdminProductForm from "./admin/AdminProductForm";

export const ImageList: React.FC<ImageListProps> = ({
  data,
  deleteProduct,
}) => {
  const isAdmin = useSelector(authSelector.getAdminEmail);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenUpdateForm = (product: any) => {
    setSelectedProduct(product);
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
                <div className={styles.single__list__box}>
                  <p>{title}</p>
                  <div className={styles.single__list__box__icon}>
                    <p className={styles.single__list__box__price}>
                      ціна:{price}
                    </p>
                    {isAdmin && deleteProduct && (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}
      {selectedProduct && (
        <AdminProductForm
          action={"update"}
          data={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};
