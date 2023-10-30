import { useState, useEffect, ChangeEvent } from "react";

import SimpleLightbox from "simplelightbox";

import { UsePaginationLogicProps } from "@/types/types";

export const useToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  return { menuOpen, setMenuOpen };
};

export const useSimpleLightbox = (images: any[]) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox(".single__list a", {
      captionDelay: 250,
      disableRightClick: true,
      showCounter: false,
      scrollZoom: false,
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
  }, [images]);
};

export const usePagination = (
  initialItemsPerPage: number,
  initialPage: number = 1
) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return {
    itemsPerPage,
    currentPage,
    setItemsPerPage,
    setCurrentPage,
    handleItemsPerPageChange,
  };
};

export const usePaginationLogic = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationLogicProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, totalPages, handlePageChange };
};
