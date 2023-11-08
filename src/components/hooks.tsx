import { useState, useEffect, ChangeEvent, RefObject } from "react";

import SimpleLightbox from "simplelightbox";

import { FormValues, UsePaginationLogicProps } from "@/types/types";
import { useLoginMutation } from "@/redux/auth/authAPI";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  isOpen: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref, onClose]);
};

export const useLoginForm = () => {
  const [login, { data, isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async (values: FormValues) => {
    try {
      await login(values);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return { handleLogin, isLoading, isError, error };
};

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

// export const usePagination = (
//   initialItemsPerPage: number,
//   initialPage: number = 1
// ) => {
//   const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage);
//   const [currentPage, setCurrentPage] = useState<number>(initialPage);

//   const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setItemsPerPage(Number(event.target.value));
//     setCurrentPage(1);
//   };

//   return {
//     itemsPerPage,
//     currentPage,
//     setItemsPerPage,
//     setCurrentPage,
//     handleItemsPerPageChange,
//   };
// };

// export const usePaginationLogic = ({
//   totalItems,
//   itemsPerPage,
//   initialPage = 1,
// }: UsePaginationLogicProps) => {
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return { currentPage, totalPages, handlePageChange };
// };
