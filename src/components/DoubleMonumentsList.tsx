"use client";

import doubleMonuments from "./MonumentsList/doubleMonuments.json";

import MonumentsList from "./MonumentsList";

const DoubleMonumentsList: React.FC = () => {
  return (
    <MonumentsList
      monumentsData={doubleMonuments}
      title="Подвійні пам`ятники"
    />
  );
};

export default DoubleMonumentsList;
