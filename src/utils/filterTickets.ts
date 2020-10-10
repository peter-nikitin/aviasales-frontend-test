import { TicketType, Segment, FilterType } from "../data/types.d";

const filterTickets = (
  ticketsArray: TicketType[],
  filtersArray: FilterType[]
): TicketType[] => {
  let resultTicketsArray: TicketType[] = [];
  if (filtersArray[0].id === "all") {
    resultTicketsArray = ticketsArray;
  } else {
    filtersArray.forEach((filterVariant: FilterType) => {
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
