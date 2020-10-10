import React, { useState, useEffect } from "react";

import Tickets from "./Tickets";

import addIdsToTickets from "../utils/addIdsToTickets";

import { SortingType, TicketType, FilterType } from "../data/types.d";

import collectFiltersFromTickets from "../modules/collectFiltersFromTickets";
import handleSelectedFiltersChange from "../utils/handleSelectedFiltersChange";
import useSortableTickets from "./useSortableTickets";
import filterTickets from "../modules/filterTickets";

import ticketsMocks from "../data/mocks/ticketsMocks";

const TicketsComponent = () => {
  const [allFilters, setAllFilters] = useState([] as FilterType[]);
  const [allTickets, setAllTickets] = useState(
    addIdsToTickets(ticketsMocks) as TicketType[]
  );

  const [sorting, setSorting] = useState("cheapest" as SortingType);

  const [filteredTickets, setFilteredTickets] = useState(allTickets);

  const [selectedFilters, setSelectedFilters] = useState([
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
  ]);

  useEffect(() => {
    setAllFilters(collectFiltersFromTickets(allTickets));
  }, [allTickets]);

  useEffect(() => {
    setFilteredTickets(filterTickets(allTickets, selectedFilters));
  }, [allTickets, selectedFilters]);

  const sortedTickets = useSortableTickets(filteredTickets, sorting);

  return (
    <Tickets
      tickets={sortedTickets}
      handleFilterChange={(newFilter: string): void =>
        handleSelectedFiltersChange(
          newFilter,
          selectedFilters,
          setSelectedFilters,
          allFilters
        )
      }
      allFilters={allFilters}
      selectedFilters={selectedFilters}
      sorting={sorting}
      setSorting={setSorting}
    />
  );
};

export default TicketsComponent;
