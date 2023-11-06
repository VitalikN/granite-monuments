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
  initialPage?: number;
}

export interface ImageProps {
  id: number;
  path: string;
}

export interface ImageListProps {
  images: ImageProps[];
  handleImagesPerPageChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  imagesPerPage: number;
}

export interface MenuItemsProps {
  closeMenu?: () => void;
}

export interface MonumentsDataProps {
  id: number;
  path: string;
}

export interface MonumentsListProps {
  monumentsData: MonumentsDataProps[];
  title: string;
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
