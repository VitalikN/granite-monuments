// import MonumentsAdmin from "@/components/MonumentsAdmin";
import PrivateRoute from "@/components/PrivateRoute";

import dynamic from "next/dynamic";

const MonumentsAdmin = dynamic(() => import("@/components/MonumentsAdmin"), {});

const MonumentsCatalog = () => {
  return (
    <PrivateRoute>
      <MonumentsAdmin />
    </PrivateRoute>
  );
};

export default MonumentsCatalog;
