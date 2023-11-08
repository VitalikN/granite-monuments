import Image from "next/image";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import styles from "../sass/layouts/imageList.module.scss";
import { ImageListProps, ImageProps } from "@/types/types";
import { useSimpleLightbox } from "./hooks";

export const ImageList: React.FC<ImageListProps> = ({ data }) => {
  useSimpleLightbox(data);

  return (
    <>
      <ul className={styles.single__list}>
        {data &&
          data.map(({ _id, url, title, price }: ImageProps) => (
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
                <p className={styles.single__list__box__price}>ціна:{price}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
