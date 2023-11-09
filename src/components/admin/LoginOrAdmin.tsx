"use client";

// import { useCurrentQuery } from "@/redux/auth/authAPI";
// import { useSelector } from "react-redux";
// import authSelector from "@/redux/auth/authSelector";
import Login from "./Login";
import AdminSingleProduct from "./AdminSingleProduct";
import { useAuth } from "../hooks";

// interface MyErrorType {
//   status: number;
//   data: { message: string };
// }

const LoginOrAdmin = () => {
  const { isLoggedIn, isLoading, isError } = useAuth();

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (!isLoggedIn || isError) {
    return <Login />;
  }

  return <AdminSingleProduct />;
};

export default LoginOrAdmin;
