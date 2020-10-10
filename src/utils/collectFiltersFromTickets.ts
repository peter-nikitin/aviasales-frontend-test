// eslint-disable-next-line import/extensions
import { FilterType, TicketType, Segment } from "../data/types.d";

const collectFiltersFromTickets = (
  ticketsArray: TicketType[]
): FilterType[] => {
  const filterSet = new Set();
  const filterResult: FilterType[] = [
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
  ];
  ticketsArray.forEach((element: TicketType) => {
    element.segments.forEach((segment: Segment) =>
      filterSet.add(segment.stops.length)
    );
  });
  filterSet.forEach((item) => {
    switch (item) {
      case 0:
        filterResult.push({
          label: "Без пересадок",
          id: "none",
          stopsCount: 0,
        });
        break;
      case 1:
        filterResult.push({
          label: "1 пересадка",
          id: "1_stop",
          stopsCount: 1,
        });
        break;
      case 2:
        filterResult.push({
          label: "2 пересадки",
          id: "2_stops",
          stopsCount: 2,
        });
        break;
      case 3:
        filterResult.push({
          label: "3 пересадки",
          id: "3_stops",
          stopsCount: 3,
        });
        break;
      case 4:
        filterResult.push({
          label: "4 пересадки",
          id: "4_stops",
          stopsCount: 4,
        });
        break;
      case 5:
        filterResult.push({
          label: "5 пересадок",
          id: "5_stops",
          stopsCount: 5,
        });
        break;

      default:
        break;
    }
  });
  return filterResult.sort((a, b) => a.stopsCount - b.stopsCount);
};

export default collectFiltersFromTickets;
