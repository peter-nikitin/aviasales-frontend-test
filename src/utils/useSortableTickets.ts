import React from "react";

import { TicketType, SortingType } from "../data/types.d";

import sortTickets from "./sortTickets";

const useSortableTickets = (
  tickets: TicketType[],
  sortingType: SortingType
): TicketType[] => {
  const sortedTickets: TicketType[] = React.useMemo(() => {
    const ticketsToSort = [...tickets];
    return sortTickets(ticketsToSort, sortingType);
  }, [tickets, sortingType]);

  return sortedTickets;
};

export default useSortableTickets;
