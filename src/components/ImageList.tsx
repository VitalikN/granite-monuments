import { useEffect } from "react";
import Image from "next/image";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import styles from "../sass/layouts/imageList.module.scss";
import { ImageListProps } from "@/types/types";
import { useSimpleLightbox } from "./hooks";

export const ImageList: React.FC<ImageListProps> = ({
  images,
  handleImagesPerPageChange,
  imagesPerPage,
}) => {
  useSimpleLightbox(images);

  return (
    <>
      <label className={styles.single__label}>
        Кількість зображень на сторінці:
        <select
          className={styles.single__select}
          value={imagesPerPage}
          onChange={handleImagesPerPageChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <ul className={styles.single__list}>
        {images.map((img) => (
          <li className={styles.single__item} key={img.id}>
            <a href={img.path}>
              <Image
                className={styles.single__img}
                src={img.path}
                alt="catalog/monument-accessories"
                width="300"
                height="400"
                priority={true}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
