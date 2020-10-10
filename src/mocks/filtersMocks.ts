import { FilterType } from "../data/types.d";

export const filtersArrayMock: FilterType[] = [
  {
    label: "Все",
    id: "all",
    stopsCount: -1,
  },
  {
    label: "Без пересадок",
    id: "none",
    stopsCount: 0,
  },
  {
    label: "1 пересадка",
    id: "1_stop",
    stopsCount: 1,
  },
  {
    label: "2 пересадки",
    id: "2_stops",
    stopsCount: 2,
  },
  {
    label: "3 пересадки",
    id: "3_stops",
    stopsCount: 3,
  },
];

export const selectedFiltersMock: FilterType[] = [
  {
    label: "1 пересадка",
    id: "1_stop",
    stopsCount: 1,
  },
  {
    label: "2 пересадки",
    id: "2_stops",
    stopsCount: 2,
  },
];
