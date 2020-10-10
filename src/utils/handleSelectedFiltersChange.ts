import React from "react";
import { FilterType } from "../data/types.d";

const handleSelectedFiltersChange = (
  clickedFilter: string,
  selectedFilters: FilterType[],
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterType[]>>,
  allFilters: FilterType[]
): void => {
  // если в массиве selectedFilters есть элимент с таким же ИД
  // и массив selectedFilters больше 1 элемента
  // удаляю этот элемент
  if (selectedFilters.filter((item) => item.id === clickedFilter).length > 0) {
    let newFilters: FilterType[] = selectedFilters;

    if (selectedFilters.length > 1) {
      newFilters = selectedFilters.filter((item) => item.id !== clickedFilter);
    }

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
