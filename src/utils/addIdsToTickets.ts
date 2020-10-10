import { TicketType } from "../data/types.d";

const addIdsToTickets = (tickets: TicketType[]): TicketType[] =>
  tickets.map((ticket, index) => ({ ...ticket, id: index + 1 }));

export default addIdsToTickets;
