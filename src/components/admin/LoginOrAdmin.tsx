"use client";

import Login from "./Login";
import AdminSingleProduct from "./AdminSingleProduct";
import { useAuth } from "../hooks";

const LoginOrAdmin = () => {
  const { isLoggedIn, isLoading, isError } = useAuth();

  // if (isLoading) {
  //   return <div>Loading.....</div>;
  // }

  if (!isLoggedIn || isError) {
    return <Login />;
  }

  return <AdminSingleProduct />;
};

export default LoginOrAdmin;
