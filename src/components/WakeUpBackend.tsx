"use client";

import { useGetAllMonumentsQuery } from "@/redux/monuments/monumentsApi";

const WakeUpBackend = () => {
  useGetAllMonumentsQuery(
    { page: 1, limit: 10, category: "all" },
    { selectFromResult: () => ({}) }
  );

  return null;
};

export default WakeUpBackend;
