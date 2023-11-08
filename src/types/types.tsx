import { ChangeEvent, ReactNode } from "react";

export interface UsePaginationLogicProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

// export interface ImageProps {
//   id: number;
//   path: string;
// }

export interface ImageListProps {
  data: any;
  handleImagesPerPageChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  imagesPerPage: number;
}

export interface MonumentsListProps {
  category: string;

  title: string;
  // subtitle: "open" | "closed";
}

export interface CatalogLayoutProps {
  children: ReactNode;
}
export interface ErrorFeedbackProps {
  name: string;
}

export type RootState = {
  auth: {
    token: string | null;
  };
};
export interface FormValues {
  email: string;
  password: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export interface ModalPropsUpdate {
  onClose: () => void;
}

export interface MenuItemsProps {
  closeMenu?: () => void;
}
export interface ImageProps {
  _id: string;
  url: string;
  price: number;
  title: string;
}
