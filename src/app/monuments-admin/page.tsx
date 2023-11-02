import PrivateRoute from "@/components/PrivateRoute";

const monumentsCatalog = () => {
  return (
    <PrivateRoute>
      <h1>каталог адміна </h1>
    </PrivateRoute>
  );
};

export default monumentsCatalog;
