import React, { FunctionComponent, useState } from "react";
import { TicketsArrayType } from "../data/ticketsTypes";
import { createUseStyles } from "react-jss";

import Tabs from "./Tabs";
import Ticket from "./Ticket";

interface ITickets {
  tickets: TicketsArrayType;
}

const useStyle = createUseStyles({
  ticketsList: {
    width: 502,
  },
});

const TicketsList: FunctionComponent<ITickets> = ({ tickets }) => {
  const [sorting, setSorting] = useState("cheapest");

  const style: Record<"ticketsList", string> = useStyle();

  return (
    <div className={style.ticketsList}>
      <Tabs selectedTab={sorting} handleTabChange={setSorting} />
      {tickets.map((ticket) => (
        <Ticket
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ))}
    </div>
  );
};

export default TicketsList;
