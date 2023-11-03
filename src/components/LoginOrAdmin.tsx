"use client";

import { useCurrentQuery } from "@/redux/auth/authAPI";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import Login from "./Login";

interface MyErrorType {
  status: number;
  data: { message: string };
}

const LoginOrAdmin = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const {
    data: token,
    error,
    isSuccess,
    isLoading,
  } = useCurrentQuery({
    skip: !isLoggedIn,
    refetchOnMount: true,
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (
    !isLoggedIn ||
    (error &&
      (error as MyErrorType).status === 401 &&
      (error as MyErrorType).data.message === "Not authorized")
  ) {
    return <Login />;
  } else if (isSuccess && token) {
    return <div>AdminContent</div>;
  }
  return null;
};

export default LoginOrAdmin;
