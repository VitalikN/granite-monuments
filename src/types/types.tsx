import { ReactNode } from "react";

export interface AuthResult {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
}

export interface MyErrorType {
  status: number;
  data: { message: string };
}

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

export interface ImageListProps {
  data: any;
  deleteProduct?: (productId: string) => void;
  category?: string;
}

export interface MonumentsListProps {
  category?: string;
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
  children: any;
  data?: any;
}
export interface ModalPropsUpdate {
  onClose: () => void;
  productId?: string | null;
}
export interface AdminProductFormProps {
  onClose: () => void;
  productId?: string | null;
  data?: any;
  action: "add" | "update";
}

export interface MenuItemsProps {
  closeMenu?: () => void;
}
export interface ImageProps {
  _id: string;
  url: string;
  price: number;
  title: string;
  category: string;
  favorite: boolean;
  subtitle: string;
}
export interface EpitaphProps {
  _id: string;
  epitaph: string;
  epitaphNumber: number;
}

export interface AddEpitaphProps {
  onClose: () => void;
  refetch: () => void;
}

export interface EpitaphFormProps {
  epitaph: string;
  epitaphNumber: number;
}
