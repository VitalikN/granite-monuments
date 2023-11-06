"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CatalogLayoutProps } from "@/types/types";
import authSelector from "@/redux/auth/authSelector";

const PrivateRoute: React.FC<CatalogLayoutProps> = ({ children }) => {
  const router = useRouter();
  const token = useSelector(authSelector.authToken);
  useEffect(() => {
    if (!token) {
      router.replace("/admin");
    }
  }, [router, token]);
  return <>{children}</>;
};

export default PrivateRoute;
