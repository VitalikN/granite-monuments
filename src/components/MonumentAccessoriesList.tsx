"use client";

import singleMonument from "./MonumentsList/singleMonument.json";
import MonumentsList from "./MonumentsList";

const MonumentAccessoriesList: React.FC = () => {
  return (
    <MonumentsList
      monumentsData={singleMonument}
      title="Аксесуари до пам`ятників"
    />
  );
};
export default MonumentAccessoriesList;
