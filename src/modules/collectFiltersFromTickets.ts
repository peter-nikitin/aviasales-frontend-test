import { TicketsArrayType } from "../data/ticketsTypes";
import { FilterArray } from "../data/filtersTypes";

const collectFiltersFromTickets = (
  ticketsArray: TicketsArrayType
): FilterArray => {
  const filterSet = new Set();
  const filterArray: FilterArray = [
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
  ];
  ticketsArray.forEach((element) => {
    element.segments.forEach((segment) => filterSet.add(segment.stops.length));
  });
  filterSet.forEach((item) => {
    switch (item) {
      case 0:
        filterArray.push({
          label: "Без пересадок",
          id: "none",
          stopsCount: 0,
        });
        break;
      case 1:
        filterArray.push({
          label: "1 пересадка",
          id: "1_stop",
          stopsCount: 1,
        });
        break;
      case 2:
        filterArray.push({
          label: "2 пересадки",
          id: "2_stops",
          stopsCount: 2,
        });
        break;
      case 3:
        filterArray.push({
          label: "3 пересадки",
          id: "3_stops",
          stopsCount: 3,
        });
        break;
      case 4:
        filterArray.push({
          label: "4 пересадки",
          id: "4_stops",
          stopsCount: 4,
        });
        break;
      case 5:
        filterArray.push({
          label: "5 пересадок",
          id: "5_stops",
          stopsCount: 5,
        });
        break;

      default:
        break;
    }
  });
  return filterArray.sort((a, b) => a.stopsCount - b.stopsCount);
};

export default collectFiltersFromTickets;
