import React from "react";

import { TicketType, TicketsArrayType } from "../data/ticketsTypes";
import SortingType from "../data/sortingTypes";

const useSortableTickets = (
  tickets: TicketsArrayType,
  sortingType: SortingType
): TicketsArrayType => {
  const sortedTickets = React.useMemo(() => {
    const ticketsToSort = [...tickets];
    switch (sortingType) {
      case "cheapest":
        return ticketsToSort.sort((a, b) => a.price - b.price);
      case "fastest":
        // так как продолжительность лежит внутри сегментов, поэтому сортируем по бОльшему значению
        return ticketsToSort.sort(
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
        return ticketsToSort;
    }
  }, [tickets, sortingType]);

  return sortedTickets;
};

export default useSortableTickets;
