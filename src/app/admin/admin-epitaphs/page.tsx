import AdminEpitaphsProduct from "@/components/admin/AdminEpitaphsProduct";
import PrivateRoute from "@/components/admin/PrivateRoute";

const AdminEpitaphs = () => {
  return (
    <PrivateRoute>
      <AdminEpitaphsProduct />
    </PrivateRoute>
  );
};

export default AdminEpitaphs;
