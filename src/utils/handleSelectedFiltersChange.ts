import React from "react";
import { FilterType } from "../data/types.d";

const handleSelectedFiltersChange = (
  clickedFilter: string,
  selectedFilters: FilterType[],
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterType[]>>,
  allFilters: FilterType[]
): void => {
  if (selectedFilters.filter((item) => item.id === clickedFilter).length > 0) {
    const newFilters: FilterType[] = selectedFilters.filter(
      (item) => item.id !== clickedFilter
    );
    setSelectedFilters(newFilters);
  } else {
    let newFilters: FilterType[] = [];
    if (clickedFilter !== "all") {
      newFilters = selectedFilters.filter((item) => item.id !== "all");
    }
    setSelectedFilters([
      ...allFilters.filter((item) => item.id === clickedFilter),
      ...newFilters,
    ]);
  }
};

export default handleSelectedFiltersChange;
