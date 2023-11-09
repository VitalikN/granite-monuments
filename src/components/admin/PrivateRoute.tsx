"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CatalogLayoutProps } from "@/types/types";
import authSelector from "@/redux/auth/authSelector";
import { useAuth } from "../hooks";

const PrivateRoute: React.FC<CatalogLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) router.replace("/admin");
  }, [router, isLoggedIn]);

  return <>{children}</>;
};

export default PrivateRoute;
