import React from "react";
import {
  FilterType,
  SelectedFiltersArray,
  FilterArray,
} from "../data/filtersTypes";

const handleSelectedFiltersChange = (
  clickedFilter: string,
  selectedFilters: SelectedFiltersArray,
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<SelectedFiltersArray>
  >,
  allFilters: FilterArray
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
