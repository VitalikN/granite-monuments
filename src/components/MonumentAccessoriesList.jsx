"use client";

// import "../../sass/utils/_container.scss";
// import "../../sass/layouts/imageList.scss";

import singleMonument from "./MonumentsList/singleMonument.json";
import MonumentsList from "./MonumentsList";

const MonumentAccessoriesList = () => {
  return (
    <MonumentsList
      monumentsData={singleMonument}
      title="Аксесуари до пам`ятників"
    />
  );
};
export default MonumentAccessoriesList;
