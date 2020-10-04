import { FilterArray, SelectedFiltersArray } from "./filtersTypes";

export const filtersArrayMock: FilterArray = [
  {
    label: "Все",
    id: "all",
  },
  {
    label: "Без пересадок",
    id: "none",
  },
  {
    label: "1 пересадка",
    id: "1_stop",
  },
  {
    label: "2 пересадки",
    id: "2_stops",
  },
  {
    label: "3 пересадки",
    id: "3_stops",
  },
];

export const selectedFiltersArrayMock: SelectedFiltersArray = [
  "1_stop",
  "2_stops",
];
