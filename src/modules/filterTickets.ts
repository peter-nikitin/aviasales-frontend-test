import { TicketType, Segment } from "../data/ticketsTypes";
import { SelectedFiltersArray, FilterType } from "../data/filtersTypes";

const filterTickets = (
  ticketsArray: TicketType[],
  selectedFiltersArray: SelectedFiltersArray
) => {
  let resultTicketsArray: TicketType[] = [];
  if (selectedFiltersArray[0].id === "all") {
    resultTicketsArray = ticketsArray;
  } else {
    selectedFiltersArray.forEach((filterVariant: FilterType) => {
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
  }

  return resultTicketsArray;
};

export default filterTickets;
