import { TicketType, TicketsArrayType } from "../data/ticketsTypes";
import SortingType from "../data/sortingTypes";

const sortTickets = (
  tickets: TicketsArrayType,
  sortingType: SortingType
): TicketsArrayType => {
  switch (sortingType) {
    case "cheapest":
      return tickets.sort((a, b) => a.price - b.price);
    case "fastest":
      // так как продолжительность лежит внутри сегментов, поэтому сортируем по бОльшему значению
      return tickets.sort(
        (a, b) =>
          (a.segments[0].duration > a.segments[1].duration
            ? a.segments[0].duration
            : a.segments[1].duration) -
          (b.segments[0].duration > b.segments[1].duration
            ? b.segments[0].duration
            : b.segments[1].duration)
      );
    default:
      return tickets;
  }
};

export default sortTickets;
