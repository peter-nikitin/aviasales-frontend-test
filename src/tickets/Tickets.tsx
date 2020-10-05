import React, { FunctionComponent, useState } from "react";
import { createUseStyles } from "react-jss";

import Filter from "./Filter";
import TicketsList from "./TicketsList";

import { filtersArrayMock } from "../data/filtersMocks";
import { ticketsMocks } from "../data/ticketsMocks";

const useStyle = createUseStyles({
  tickets: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

const Tickets: FunctionComponent = () => {
  const style: Record<"tickets", string> = useStyle();
  const [selectedFilters, setSelectedFilters] = useState(["all"] as string[]);

  const handleSelectedFiltersChange = (clickedFilter: string) => {
    if (selectedFilters.includes(clickedFilter)) {
      const newFilters: string[] = selectedFilters.filter(
        (item) => item !== clickedFilter
      );
      setSelectedFilters(newFilters);
    } else {
      let newFilters: string[] = [];
      if (clickedFilter !== "all") {
        newFilters = selectedFilters.filter((item) => item !== "all");
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
      <TicketsList tickets={ticketsMocks} />
    </div>
  );
};

export default Tickets;
