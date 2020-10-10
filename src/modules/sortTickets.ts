import { TicketType, SortingType } from "../data/types.d";

const sortTickets = (
  tickets: TicketType[],
  sortingType: SortingType
): TicketType[] => {
  switch (sortingType) {
    case "cheapest":
      return tickets.sort((a, b) => a.price - b.price);
    case "fastest":
      // так как продолжительность лежит внутри сегментов, поэтому сортируем по бОльшему значению
      return tickets.sort(
        // TODO: заменить алгоритм сортировки
        (a, b) => a.segments[0].duration - b.segments[0].duration
        // (a.segments[0].duration  > a.segments[1].duration
        //   ? a.segments[0].duration
        //   : a.segments[1].duration) -
        // (b.segments[0].duration > b.segments[1].duration
        //   ? b.segments[0].duration
        //   : b.segments[1].duration)
      );
    default:
      return tickets;
  }
};

export default sortTickets;
