import React, { useState, useEffect } from "react";

import Tickets from "./Tickets";

import {
  SortingType,
  TicketType,
  FilterType,
  SearchIdType,
} from "../../data/types.d";

import {
  collectFiltersFromTickets,
  handleSelectedFiltersChange,
  useSortableTickets,
  filterTickets,
  addIdsToTickets,
} from "../../utils";

import getAllTickets from "../../utils/api";

import ticketsMocks from "../../mocks/ticketsMocks";

const TicketsComponent: React.FunctionComponent = () => {
  const [allFilters, setAllFilters] = useState([] as FilterType[]);
  const [allTickets, setAllTickets] = useState([] as TicketType[]);
  const [isLoading, setLoading] = useState(true);

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
    getAllTickets(setAllTickets, addIdsToTickets)
      .then(() => setLoading(false))
      .catch((err: Error) => console.log(err));
  }, []);

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
      isLoading={isLoading}
    />
  );
};

export default TicketsComponent;
