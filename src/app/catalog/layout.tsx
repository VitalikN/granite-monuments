import Product from "@/components/Product";
// import { CatalogLayoutProps } from "@/types/types";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Product />

      {children}
    </>
  );
}
