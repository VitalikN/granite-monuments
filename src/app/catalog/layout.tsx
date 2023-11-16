import Product from "@/components/Product";

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
