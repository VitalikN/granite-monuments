"use client";

import doubleMonuments from "./MonumentsList/doubleMonuments.json";

import MonumentsList from "./MonumentsList";

const DoubleMonumentsList = () => {
  return (
    <MonumentsList
      monumentsData={doubleMonuments}
      title="Подвійні пам`ятники"
    />
  );
};

export default DoubleMonumentsList;
