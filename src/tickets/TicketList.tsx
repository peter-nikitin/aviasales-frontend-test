import React from "react";
import { TicketsArrayType, TicketType } from "../data/ticketsTypes";
import Ticket from "./Ticket";

interface ITicketsListProps {
  ticketsArray: TicketsArrayType;
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
