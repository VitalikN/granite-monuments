import Product from "@/components/Product";
import { CatalogLayoutProps } from "@/types/types";

export const CatalogLayout: React.FC<CatalogLayoutProps> = ({ children }) => {
  return (
    <>
      <Product />

      {children}
    </>
  );
};
