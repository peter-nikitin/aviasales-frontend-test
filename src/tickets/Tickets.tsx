import React, { FunctionComponent, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import Filter from "./Filter";
import Tabs from "./Tabs";
import Ticket from "./Ticket";

import { TicketsArrayType, TicketType } from "../data/ticketsTypes";
import { SelectedFiltersArray, FilterType } from "../data/filtersTypes";
import SortingType from "../data/sortingTypes";

import { filtersArrayMock } from "../data/mocks/filtersMocks";
import ticketsMocks from "../data/mocks/ticketsMocks";

import handleSelectedFiltersChange from "../utils/handleSelectedFiltersChange";
import sortTickets from "../modules/sortTickets";

const useStyle = createUseStyles({
  tickets: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ticketsList: {
    width: 502,
  },
});

const Tickets: FunctionComponent = () => {
  const style = useStyle();
  const [selectedFilters, setSelectedFilters] = useState([
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
  ]);
  const [sorting, setSorting] = useState("cheapest" as SortingType);
  const [allFilters, setAllFilters] = useState(
    filtersArrayMock as FilterType[]
  );
  const [allTickets, setAllTickets] = useState(ticketsMocks);
  const [ticketsToShow, setTicketsToShow] = useState([] as TicketType[]);

  useEffect(() => {
    setTicketsToShow(sortTickets(allTickets, sorting));
  }, [selectedFilters]);

  return (
    <div className={style.tickets}>
      <Filter
        handleFilterChange={(newFilter) =>
          handleSelectedFiltersChange(
            newFilter,
            selectedFilters,
            setSelectedFilters,
            allFilters
          )
        }
        selectedFilters={selectedFilters}
        filtersArray={filtersArrayMock}
      />
      <div className={style.ticketsList}>
        <Tabs selectedTab={sorting} handleTabChange={setSorting} />

        {ticketsToShow.map((ticket: TicketType) => (
          <Ticket
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
          />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
