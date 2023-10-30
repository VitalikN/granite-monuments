import Product from "@/components/Product";

export default function CatalogLayout({ children }) {
  return (
    <>
      <Product />

      {children}
    </>
  );
}
