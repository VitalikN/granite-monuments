import Product from "@/components/Product";
import { CatalogLayoutProps } from "@/types/types";

const CatalogLayout: React.FC<CatalogLayoutProps> = ({ children }) => {
  return (
    <>
      <Product />

      {children}
    </>
  );
};
