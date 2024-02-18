import dynamic from "next/dynamic";

const LoginOrAdmin = dynamic(
  () => import("@/components/admin/LoginOrAdmin"),
  {}
);

const Admin = () => {
  return <LoginOrAdmin />;
};

export default Admin;
