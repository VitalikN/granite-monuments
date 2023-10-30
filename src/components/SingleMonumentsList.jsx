"use client";

import singleMonument from "./MonumentsList/singleMonument.json";
import MonumentsList from "./MonumentsList";

const SingleMonumentsList = () => {
  return (
    <MonumentsList monumentsData={singleMonument} title="Одинарні пам`ятники" />
  );
};
export default SingleMonumentsList;
