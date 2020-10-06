import React, { FunctionComponent, useState } from "react";
import { createUseStyles } from "react-jss";

import Filter from "./Filter";
import Tabs from "./Tabs";
import Ticket from "./Ticket";

import { TicketsArrayType, TicketType } from "../data/ticketsTypes";
import { SelectedFiltersArray, Filter } from "../data/filtersTypes";

import { filtersArrayMock } from "../data/filtersMocks";
import ticketsMocks from "../data/ticketsMocks";

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

// TODO:поправить тип фильтров при клике

const Tickets: FunctionComponent = () => {
  const style = useStyle();
  const [selectedFilters, setSelectedFilters] = useState([
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
  ] as Filter[]);
  const [sorting, setSorting] = useState("cheapest");

  const handleSelectedFiltersChange = (clickedFilter: string) => {
    if (selectedFilters.includes(clickedFilter)) {
      const newFilters: Filter[] = selectedFilters.filter(
        (item) => item !== clickedFilter
      );
      setSelectedFilters(newFilters);
    } else {
      let newFilters: Filter[] = [];
      if (clickedFilter !== "all") {
        newFilters = selectedFilters.filter((item) => item.id !== "all");
      }
      setSelectedFilters([clickedFilter, ...newFilters]);
    }
  };

  return (
    <div className={style.tickets}>
      <Filter
        handleFilterChange={handleSelectedFiltersChange}
        selectedFilters={selectedFilters}
        filtersArray={filtersArrayMock}
      />
      <div className={style.ticketsList}>
        <Tabs selectedTab={sorting} handleTabChange={setSorting} />

        {ticketsMocks.map((ticket: TicketType) => (
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
