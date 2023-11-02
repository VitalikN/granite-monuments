"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CatalogLayoutProps } from "@/types/types";
import authSelector from "@/redux/auth/authSelector";

const PrivateRoute: React.FC<CatalogLayoutProps> = ({ children }) => {
  const router = useRouter();
  const token = useSelector(authSelector.authToken);
  console.log("Token from selector:", token);
  useEffect(() => {
    if (!token) {
      console.log("No token, redirect to /admin");
      router.replace("/admin");
    } else {
      console.log("Token exists, redirect to /monuments-admin");
      router.replace("/monuments-admin");
    }
  }, [router, token]);
  return <>{children}</>;
};

export default PrivateRoute;
