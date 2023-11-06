// import MonumentsAdmin from "@/components/MonumentsAdmin";
import AdminSidebar from "@/components/ admin/AdminSidebar";
import PrivateRoute from "@/components/ admin/PrivateRoute";

import dynamic from "next/dynamic";

const MonumentsAdmin = dynamic(
  () => import("@/components/ admin/MonumentsAdmin"),
  {}
);

const MonumentsCatalog = () => {
  return (
    <PrivateRoute>
      <MonumentsAdmin />
    </PrivateRoute>
  );
};

export default MonumentsCatalog;
