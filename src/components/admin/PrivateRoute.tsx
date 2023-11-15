"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CatalogLayoutProps } from "@/types/types";
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
