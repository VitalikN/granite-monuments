"use client";

import icons from "./MonumentsList/icons.json";
import MonumentsList from "./MonumentsList";

const IconsList = () => {
  return <MonumentsList monumentsData={icons} title="Ікони до пам`ятників" />;
};
export default IconsList;
