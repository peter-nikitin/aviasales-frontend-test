import React from "react";
import { TicketType } from "../data/types.d";
import Ticket from "./Ticket";

interface ITicketsListProps {
  ticketsArray: TicketType[];
}

const TicketList: React.FunctionComponent<ITicketsListProps> = ({
  ticketsArray,
}: ITicketsListProps) => {
  console.log(ticketsArray.length);

  return (
    <div>
      {ticketsArray.map((ticket: TicketType) => (
        <div key={ticket.id}>
          <Ticket
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
            id={ticket.id}
          />
        </div>
      ))}
    </div>
  );
};

export default TicketList;
