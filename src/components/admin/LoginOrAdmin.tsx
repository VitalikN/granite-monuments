"use client";

import Login from "./Login";
import AdminSingleProduct from "./AdminSingleProduct";
import { useAuth } from "../hooks";
import Loader from "../Loader";

const LoginOrAdmin = () => {
  const { isLoggedIn, isLoading, isError } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoggedIn || isError) {
    return <Login />;
  }

  return <AdminSingleProduct />;
};

export default LoginOrAdmin;
