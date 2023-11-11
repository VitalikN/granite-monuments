import { FC, useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { ImageList } from "../ImageList";

import styles from "../../sass/layouts/monumentsList.module.scss";
import { MonumentsListProps } from "@/types/types";
import {
  useDeleteMonumentMutation,
  useGetAllMonumentsProductQuery,
} from "@/redux/adminMonumentsApi/adminMonumentsApi";
import TechnicalWorks from "../product/TechnicalWorks";

const AdminMonumentsProduct: FC<MonumentsListProps> = ({ title, category }) => {
  const [selectedSubtitle, setSelectedSubtitle] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setItemsPerPage(Number(event.target.value));
  //   setCurrentPage(1);
  // };
  const { data, error, isLoading, refetch } = useGetAllMonumentsProductQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: category,
    subtitle: selectedSubtitle,
  });
  const [deleteMonument] = useDeleteMonumentMutation();

  const handleDelete = async (_id: string) => {
    await deleteMonument(_id).unwrap();
    refetch();
  };
  const handleSubtitleChange = (e: any) => {
    const newSubtitle = e.target.value;
    setSelectedSubtitle(newSubtitle);
    setCurrentPage(1);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, itemsPerPage, category, selectedSubtitle, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || data.total === 0) return <TechnicalWorks title={title} />;

  // if (error || data.total === 0) {
  //   return (
  //     <section className={styles.technical__section}>
  //       <h2 className={styles.single__title}>{title}</h2>
  //       <p className={styles.technical__works}>
  //         Ведуться технічні роботи. Перепрошуємо за незручності.
  //       </p>

  //       <Image
  //         className={styles.technical__works__img}
  //         src={"/developer.jpeg"}
  //         alt="developer"
  //         width="600"
  //         height="400"
  //         priority={true}
  //       />
  //     </section>
  //   );
  // }

  return (
    <div>
      <h2 className={styles.single__title}>{title}</h2>

      <select
        className={styles.selected__saubtitle}
        onChange={handleSubtitleChange}
        style={{
          display:
            category === "single" || category === "double" ? "block" : "none",
        }}
      >
        <option value="">Всі</option>
        <option value="open">Відкриті</option>
        <option value="closed">Закриті</option>
      </select>

      <ImageList data={data.data} deleteProduct={handleDelete} />

      <Pagination
        totalItems={data.total}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AdminMonumentsProduct;
