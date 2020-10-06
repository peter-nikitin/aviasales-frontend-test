import { TicketType, Segment } from "./ticketsTypes";
import { SelectedFiltersArray, Filter } from "./filtersTypes";

const filterTickets = (
  ticketsArray: TicketType[],
  selectedFiltersArray: SelectedFiltersArray
) => {
  const resultTicketsArray: TicketType[] = [];

  selectedFiltersArray.forEach((filterVariant: Filter) => {
    ticketsArray
      .filter((item: TicketType) => {
        const maxStopsCountInTicket: number =
          item.segments[0].stops.length > item.segments[1].stops.length
            ? item.segments[0].stops.length
            : item.segments[1].stops.length;

        return maxStopsCountInTicket === filterVariant.stopsCount;
      })
      .forEach((item) => resultTicketsArray.push(item));
  });
  return resultTicketsArray;
};

export default filterTickets;
